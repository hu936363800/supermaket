<template>
  <div class="goods">
     <div v-for="item in good" class="item" >
    <goods-list-item :goodsItem="item" ></goods-list-item></div>

  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    name:'GoodsList',
    components:{
      GoodsListItem
    },
    props:{
      good:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.item {
  width: 48%;
}
</style>
