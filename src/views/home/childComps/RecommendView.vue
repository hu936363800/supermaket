<template>
<div class="recommend">
 <div v-for="item in recommends" class="recommend-item">
   <a :href="item.link">
     <img :src="item.image" alt="">
     <div>{{item.title}}</div>
   </a>
 </div>
</div>
</template>

<script>
  export default {
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    /* justify-content: center; */
    text-align: center;
    font-size: 12px;
    width: 100%;
    padding: 15px 0 30px;
    border-bottom: 6px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }
  .recommend img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
</style>
