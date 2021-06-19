<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      } 
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      //创建better-scroll
       this.scroll = new BScroll(this.$refs.wrapper,{
       observeDOM:true,
       observeImage:true,
       click:true,
       probeType:this.probeType,
       pullUpLoad:this.pullUpLoad
      
       })
        //2.监听滚动距离
       if(this.probeType === 3 ){
         this.scroll.on('scroll',position => {
         this.$emit('scroll',position)
       })
       }; 
       //3.监听上拉
       if(this.pullUpLoad)
       this.scroll.on('pullingUp',() => {
         this.$emit('pullingUp');
       })
    },
    methods:{
      scrollTo(x,y,time){
         this.scroll && this.scroll.scrollTo(x,y,time)

      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      getscrollY(){
        return  this.scroll? this.scroll.y:0
      }
    }
  }
</script>
<style scoped>
</style>
