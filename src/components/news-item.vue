<template>
<a class="news-item" href="">
<img class="news-img" :src="news.image" alt="">
<div class="news-text">
  <span class="news-title">{{news.title}}</span>
  <div class="news-info">
    <span>{{news.postdate}}</span>
    <span v-if="news.commentcount">{{news.commentcount}}评</span>
  </div>
</div>
</a>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.news-item {
  display: flex;
  height: 90px;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.news-img {
  width: 100px;
  height: 75px;
  margin-right: 10px;
}
.news-text {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news-title {
  font-size: 15px;
}
.news-info {
  color: #aaa;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
</style>
