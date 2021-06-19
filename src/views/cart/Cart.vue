<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar" >
      <div slot="center" >购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->  
    <cart-list></cart-list>
    <!-- 商品底部工具栏 -->
    <cart-bottom-bar></cart-bottom-bar>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComponents/CartList.vue'
import CartBottomBar from './childComponents/CartBottomBar.vue'
// import Scroll from 'components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
  export default{
    name:'Cart',
    components:{
      NavBar,
      CartList,
      CartBottomBar
      // Scroll
    },
    computed:{
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
#cart {
  height: 100vh;
}
.nav-bar{
  background-color:var(--color-tint);
  color: #fff;}
/* scroll滚动 */
/* .content-first {
    height: calc(100% - 44px - 49px);
    
} */
</style>
