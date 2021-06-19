<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']" 
                 @tabClick="tabClick" 
                 ref="tabControl1"
                 class="tab-control"
                 v-show="tabShow"
                 
                 ></tab-control>
     <scroll class="cont"
             ref="scroll"
             :probe-type="3"
             :pull-up-load="true"
             @pullingUp="loadMore"
             @scroll="contentScroll" >
    <home-swiper :banners='banners' 
         @swiperImageLoad='swiperImageLoad'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view></feature-view>
    <tab-control :title="['流行','新款','精选']" 
                 @tabClick="tabClick" 
                 ref="tabControl2"                
                 ></tab-control>
    <goods-list :good="showgoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll'
  // import backTop from 'components/content/backtop/backTop'
 
import {backTopMixin} from  "@/common/mixin.js"

  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home.js'
  


  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      // backTop
    },
    mixins:[backTopMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        // isShowBackTop:false,
        tabOffsetTop:0,
        tabShow:false,
        saveY:0
      }
    },
    destroyed() {
      console.log('被销毁了');

    },
    methods: {
      //事件监听
      tabClick(index) {
        if (index == 0) {
          this.currentType = 'pop';
        } else if (index == 1) {
          this.currentType = 'new';
        } else if (index == 2) {
          this.currentType = 'sell';
        }
        this.$refs.tabControl1.currentindex = index;
        this.$refs.tabControl2.currentindex = index;
      },
      // backClick(){
      //   this.$refs.scroll.scrollTo(0,0,300)
      // },
      contentScroll(position){
        //1.判断backtop是否显示
       this.isShowBackTop = -position.y > 1000;
       //2.决定taboffsettop到达545  吸顶 position:fixed
       this.tabShow = -position.y > this.tabOffsetTop;

        }
       ,
       loadMore(){
          this.getHomeGoods(this.currentType)

       },
       finishPullUp(){
         this.$refs.scroll.scroll.finishPullUp()
       },
       swiperImageLoad(){
         this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
       },

      //请求网络数据
      //请求多个数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          // console.log(res.data.recommend);
        })
      },
      //请求商品数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(result => {
          this.goods[type].list.push(...result.data.list)
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp()
        })
      }


    },

    created() {
      //请求多个数据
      this.getHomeMultidata()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    // 记录home离开位置
    activated(){
     this.$refs.scroll.scrollTo(0,this.saveY,10)
     this.$refs.scroll.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getscrollY();
      console.log(this.saveY);
    },

    computed: {
      // 当前点击后 pop new 类型
      showgoods() {

        return this.goods[this.currentType].list
      }
    }

  }
</script>

<style scoped>
  #home {
    position: relative;

    height: 100vh;
  }
 
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }

  /* .cont{
   height:calc(100% - 50px);
   overflow: hidden;
  } */
  .cont{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0;
    right: 0;
  }
</style>
