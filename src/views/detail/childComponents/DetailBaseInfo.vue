<template>
  <div  v-if="Object.keys(detailGoods).length !== 0" class="base-info">
       <div class="info-title">{{detailGoods.title}}</div> 
       <div class="info-price">
           <span class="n-price">{{detailGoods.newPrice}}</span>
           <span class="o-price">{{detailGoods.oldPrice}}</span>
           <span v-if="detailGoods.discount" class="discount">{{detailGoods.discount}}</span>
       </div>
       <div class="other-info">
           <span>{{detailGoods.columns[0]}}</span>
           <span>{{detailGoods.columns[1]}}</span>
           <span>{{detailGoods.services[detailGoods.services.length-1].name}}</span>
       </div>
       <div class="info-service">
           <span class="info-service-item" 
             v-for="index in detailGoods.services.length-1"
             :key="index" >
             

             <img :src="detailGoods.services[2].icon" 
             v-if="detailGoods.services[index-1].name == '延误必赔'">

             <img :src="detailGoods.services[index-1].icon" v-else> 
             <span>{{detailGoods.services[index-1].name}}</span> 
             
           </span>
       </div>
  </div>
</template>

<script>
export default {
    name:'DetailBaseInfo',
    props:{
        detailGoods:{
            type:Object,
            default(){
                return {}
            }
        }
    }

}
</script>

<style scoped>
.base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
.info-title {
    color: #222;
    font-size: 18px;
    
  }
 .info-price {
    margin-top: 10px;
  }

  /* 中间价格样式 */
.info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }
.info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 10px;
  }
  /*销量收藏类  */
.other-info{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
}
/* 快递类 */
.info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
.info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
 .info-service-item span {
    font-size: 13px;
    color: #333;
  }

</style>