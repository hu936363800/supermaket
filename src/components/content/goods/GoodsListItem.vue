<template>
  <div class="goods-item" @click="itemClick">
     <!-- <a :href="goodsItem.link"> -->
    <img  v-lazy="showImage" alt="">
  
    <!-- </a> -->

    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
     </div>
  </div>
</template>

<script>
  export default {
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      itemClick(){
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img 
      }
    }
  }

</script>

<style>
.goods-item{
   padding-bottom: 20px;

}
.goods-item img{
   width: 100%;
  border-radius: 5px;
}
.goods-info{
  margin-top: 20px;
  font-size: 12px;
  text-align: center;


}
.goods-info p{
 overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
 .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 13px;
    background: url(~assets/img/common/collect.svg ) ;
    background-size: 14px 15px;

  }
</style>
