<template>
<div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
     <!-- 上面的内容 -->
     <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
    </div>
    <!-- 用户 -->
     <div class="info-user">
         <img :src="commentInfo.user.avatar" alt="">
         <span>{{commentInfo.user.uname}}</span>        
     </div>
    <!-- 评价下半部 -->
     <div class="info-detail">
          <p>{{commentInfo.content}}</p>
          <!-- 时间 -->
          <div class="info-other">
              <span class="date">{{commentInfo.created | showDate}}</span>
              <span class="info-style">{{commentInfo.style}}</span>
          </div>
          <!-- 买家秀图片 -->
          <div class="info-imgs">
          <img :src="item" :key="index"
                v-for="(item, index) in commentInfo.images">
        </div>
     </div>

</div>
  
</template>

<script>
import {formatDate} from "@/common/utils.js";
export default {
  name:'DetailCommentInfo',
  props:{
      commentInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  filters: {
		  showDate: function (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
}
</script>

<style scoped>
.comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
.info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
.header-title{
    float: left;
    font-size: 16px;
}
.header-more{
    float: right;
    font-size: 16px;
}
/* 下面的样式 */
.info-user {
    padding: 10px 0 5px;
    display: flex;
    align-items: center;
  }
.info-user img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
.info-user span {
    margin-left: 20px;
    font-size: 16px;  
}
.info-detail p {
    font-size: 18px;
    padding: 10px,5px;
    text-indent: 2em;
}
/* .时间 */
.info-other{
    font-size: 12px;
    color: #999;
    margin-top: 25px;
    margin-bottom: 10px;
}
.info-other.data {
    margin-right: 10px;
    margin-bottom: 15px;
    
}
.info-imgs img{
    width: 70px;
    height: 70px;
    margin-right: 10px;
}
.info-style{
    margin-left: 10px;
}
</style>