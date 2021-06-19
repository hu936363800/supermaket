<template>
<div class="cart-list">
    <scroll class="content-first" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList"
                      :key="index"
                      :item-info="item"></cart-list-item>
    </scroll>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem.vue'
export default {
  name:'CartList',
  computed:{
      ...mapGetters(['cartList'])
  },
  components:{
      Scroll,
      CartListItem
  },
  activated(){
      this.$refs.scroll.scroll.refresh();
  }
}
</script>

<style >
.cart-list{
    height: calc(100% - 44px - 49px - 40px);
}
.content-first {
    height: 100%;
    overflow: hidden;
    
}

</style>