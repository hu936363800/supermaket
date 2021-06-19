<template>
<div>
  <nav-bar>
      <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title" >
          <span  class="titleItem"
                 v-for="(item,index) in titles" 
                 :key="index"
                 @click="detailClick(index)" 
                 :class="{actived:currentIndex == index}"> {{item}} </span></div>   
  </nav-bar>
     
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name:'DetailNavBar',
  components:{
     NavBar,
 },
  data(){
      return {
          titles:['商品','参数','评论','推荐'],
          currentIndex:0
      }
  },
methods:{
    detailClick(index){
   this.currentIndex = index;
   this.$emit('detailClick',index)
    },
    backClick(){
        this.$router.back();
    }
}

}
</script>

<style scoped>
.title {
    display: flex;
}
.title .titleItem{
    flex: 1;
    font-size: 13px;
}
.back{
    padding-top: 5px;
}
/* 点击变换颜色 */
.actived{
    color:var(--color-high-text);
}
</style>