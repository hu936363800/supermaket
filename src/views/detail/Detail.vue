<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav-bar" 
                      @detailClick="detailClick"
                      ref="nav"></detail-nav-bar>
      <scroll class="detail-content" 
              :probe-type="3"
             :pull-up-load="true"
              ref="scroll"
              @scroll="contentScroll">
      <detail-swiper :top-images="topImage"></detail-swiper>
      <detail-base-info :detailGoods="detailGoods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info  :detailInfo="detailInfo" @detailImgeLoad="detailImgeLoad"></detail-goods-info>
      <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info> 
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :good=recommend></goods-list>
      </scroll>
      <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComponents/DetailNavBar.vue'
import detailSwiper from './childComponents/detailSwiper.vue'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParamInfo from './childComponents/DetailParamInfo.vue'
import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailBottomBar from './childComponents/DetailBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll.vue'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'
import {debounce} from  "@/common/utils.js"
import {backTopMixin} from  "@/common/mixin.js"

import {mapActions} from 'vuex'

// 封装的toast
// import Toast from 'components/common/toast/Toast'
export default {
 name:'Detail',
 components:{
    DetailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,

 },
 data(){
     return{
         iid:null,
         topImage:null,
         detailGoods:{},
         shop:{},
         detailInfo:{},
         paramInfo:{},
         commentInfo:{},
         recommend:[],
         themeTopYs:[],
         getThemeTopY:null,
         positionY:0,
         cIndex:0,
     }
 },
 mixins:[backTopMixin],
 methods:{
    //  映射vuex 中 Action
    ...mapActions(['addCar']),
    //  添加到购物车
    addCart(){
    //    获取商品信息 只需要购物车展示的信息
        const product = {};
        product.image = this.topImage[0];
        product.title = this.detailGoods.title;
        product.desc  = this.detailGoods.desc;
        product.price = this.detailGoods.nowPrice;
        product.iid   = this.iid;       
        console.log(product);
        // this.$store.commit('addCar', product);
        //  this.$store.dispatch('addCar',product).then(res => {
        //      return console.log(res);
        //  })
        // 映射写法
         this.addCar(product).then(res => {
             
            this.$toast.show(res,2000)
         })
    },
    //  监听图片完成 参数上方的图片
    detailImgeLoad(){
        this.getThemeTopY()
           
    },
    // 监听图片点击
    detailClick(index){
         console.log(index);
         this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300)
     } ,
    //  监听滚动scroll => position
    contentScroll(position){
        // 获取y值
        this.positionY = - position.y         
        //做对比和themeTopYs   
        // 做法2 最后一个加一个很大的值  通过  >=x>=      
        let length = this.themeTopYs.length;             
        for(let i = 0;i < length-1;i++){
            if (this.cIndex !== i && 
           ( this.positionY >= this.themeTopYs[i] && this.positionY <= this.themeTopYs[i+1])) {
                
                 this.cIndex = i;
                 this.$refs.nav.currentIndex = this.cIndex;               
            }
        };
        this.isShowBackTop = -position.y > 1000;
    }
 },
 created(){
    //  1.保存请求的idd数据
     this.iid = this.$route.params.iid;
     
    //  2.请求Iid数据
    getDetail(this.iid).then(res => {
        const data = res.result
       //1.获取顶部轮播图数据
       
        this.topImage = data.itemInfo.topImages;
          
        //3.获取商品信息数据
        this.detailGoods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        
        //4.获取商家的信息数据
        this.shop = new Shop(data.shopInfo)
        //5.获取商品详情信息数据
        this.detailInfo = data.detailInfo;
        // 6.获取商品的参数 数据
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        
        //7.评论数据
        if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0];      
        };    
        this.getThemeTopY = debounce(() => {
            this.themeTopYs = [];
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.param.$el.offsetTop);
             this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            this.themeTopYs.push(Number.MAX_VALUE);
            
            
          
        },400)  
    }),
    getRecommend().then(result => {
       this.recommend = result.data.list
       
    })

 }

}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 100;
    background-color: #fff;
    height: 100vh;
}
.detail-nav-bar{
    position: relative;
    background-color: #fff;
    z-index: 101;
}
.detail-content{
   overflow: hidden;
   height: calc(100% - 44px - 58px);
}
</style>