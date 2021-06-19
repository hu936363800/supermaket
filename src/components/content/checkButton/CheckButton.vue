<template>
  <div class="check-button" :class="{check:ischeck}">
      <img src="~assets/img/cart/tick.svg" alt="图片这是">
  </div>
</template>

<script>
export default {
name:'CheckButton',
props:{
    ischeck:{
        type:Boolean,
        default:false
    }
}
}

</script>

<style  scoped>
.check-button {
    border-radius: 50%;
    border: 2px solid #aaa;
    
}
.check{
    background-color:red;
    border-color:red ;
}
</style>