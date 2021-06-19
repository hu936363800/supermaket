<template>
  <div class="bottom-bar">
    <!-- 左边背景图片文字 -->
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <!-- 右边购物车购买 -->
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart" >加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
name:'DetailBottomBar',
methods:{
  addToCart(){
    this.$emit('addCart')
  }
}
}
</script>

<style scoped>
.bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
   /* 平分左右 */
    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }
/* 平分左右中div */
  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
    
  }
  /* 小图片 */
   .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 0;
    
    
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
 .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }
/* 右边的居中字体 */
.bar-right {
    font-size: 18px;
    line-height: 58px;
  }
.buy{
    background-color: #f69;
}
.cart {
    background-color: #ffe817;
}
</style>