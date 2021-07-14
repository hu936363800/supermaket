<template>
  <div class="tab-control">
    <div class="tab-control-item" @click="itemclick(index)" 
         v-for="(item,index) in title" :class="{active:currentindex === index}" :key="item">
      <span>{{item}}</span> </div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    
    data(){
      return {
        currentindex:0,
        isActive:true
      }
    },
    methods:{
      itemclick(index){
        this.currentindex = index
				this.$emit('tabClick',index)
      }
    }

  }
</script>

<style>
  .tab-control {
    display: flex;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
     text-align: center;
     height: 40px;
     line-height: 40px;
     font-size: 15px;
  }
 .active{
   color: var(--color-high-text);

 }
 .active span{
   border-bottom: 3px solid var(--color-tint);

 }
   .tab-control-item span {
     padding: 5px;
   }
</style>
