<template>
  <div id="shop-item">
    <div class="item-selector">
        <!-- 选择按钮 -->
      <check-button :ischeck="itemInfo.checked" @click.native="checkClick"></check-button>
    </div>
    <!-- 左侧商品图片 -->
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <!-- 右侧参数 -->
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>

      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
 name:'CartListItem',
 props:{
     itemInfo:{
         type:Object,
         default(){
             return {}
         }
     }
 },
 components:{
     CheckButton
 },
 methods:{
     checkClick(){
         this.itemInfo.checked = !this.itemInfo.checked
     }
 }
}
</script>

<style  scoped>
 #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  /* 选择右边的小图标 */
  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }
/* 设置左侧图片大小 */
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  /* 右边描述 */
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  /* 下边 */
  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .info-bottom .item-price {
    color: orangered;
  }

</style>