<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data(){
      return {
        message:'',
        isShow:false
      }
  },
  methods:{
      show(message,delay){
         this.isShow = true;
         this.message = message;
         setTimeout(() => {
         this.isShow = false;
         this.message = '';
         },delay);
      }
  }
}
</script>

<style>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    background-color:rgba(0, 0, 0, .75);
    color: #fff;
    padding: 5px 20px;
    transform: translate(-50%,-50%);
    z-index: 1000;
}
</style>