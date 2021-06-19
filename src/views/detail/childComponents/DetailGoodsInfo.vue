<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
      <!-- 穿着效果上部分 -->
      <div class="info-desc clear-fix">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <!-- 穿着效果 -->
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <!-- 图片模特 -->
      <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" 
           :src="item" alt="" :key="index"
            @load="detailImge">
      </div>
  </div>
</template>

<script>
export default {
   name:'DetailGoodsInfo',
   props:{
       detailInfo:{
           type:Object,
           default(){
               {}
           }
       }
   },
   methods:{
        detailImge(){
            this.$emit('detailImgeLoad')
        }
   }
}
</script>

<style scoped>
/* 大框架 */
.goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
}
/* 穿着效果上方 */
.info-desc {
    padding: 0 15px;
    
}
.info-desc .start ,.info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
}
.start{
    float: left;
}
.end{
    float:right;
}
.info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
    right: 0;
  }
.info-desc .start::before{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
    left: 0;
}
.info-desc .desc{
    padding: 15px 0;
    font-size: 14px;
    text-indent: 2em;
}
/* 穿着效果文字 */
.info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
/* 图片 */
.info-list img {
    width: 100%;
  }
</style>