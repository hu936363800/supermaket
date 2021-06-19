<template>
  <div class="bottom-bar">
      <check-button class="check-button" 
                    :ischeck="isSelect"
                    @click.native="selectAll"></check-button>
      <span class="check-all">全选</span> 
      <span class="check-price">合计: ¥{{totalPrice}}</span>
      <span class="check-buy" @click="goBuyClick">去结算({{checkLenth}})</span>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name:'CartBottomBar',
  components:{
    CheckButton
  },
  computed:{
    totalPrice(){
      return this.$store.getters.cartList.filter(item => {
        return  item.checked;      
      }).reduce((pre,item) => {
           return  pre + item.price*item.count
      },0).toFixed(2)
    },
    // 被选中的长度
    checkLenth(){
      return this.$store.state.cartList.filter(length => length.checked).length
    },
    isSelect(){
      if(this.$store.state.cartList.length === 0){
        return false
      }else{return this.$store.state.cartList.length === this.checkLenth}    
    }
  },
  methods:{
    selectAll(){     
        if (this.isSelect){
          this.$store.state.cartList.forEach(item=> {
           return item.checked = false
          });
        }else {
           this.$store.state.cartList.forEach(item=> {
           return item.checked = true
          });
        }    
    },
      goBuyClick(){
        
        this.$toast.show('请选商品',2000)
      }    
  }
}
</script>

<style scoped>
.bottom-bar{
    height: 40px;
    background-color: #eee;
    position: relative;
   
}
.check-button{
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 9px;
  }
.bottom-bar .check-all {
  font-size: 15px;
  margin-left: 40px;
}
.check-price {
  font-size: 20px;
  margin-left: 20px;
}
.check-buy{
  
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 20px;
  text-align: center;
  padding: 0 20px;
  padding-top: 7px;
  background-color: orangered;
  color: #fff;
  
}
</style>