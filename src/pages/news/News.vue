<template>
  <div class="container">
    <swiper autoplay, indicator-dots, circular>
      <swiper-item v-for="item of informationBanner" v-bind:key="item">
        <img v-bind:src="item.image" class="slide-image" width="355" height="150" />
      </swiper-item>
    </swiper>
    <div class="news-wrap">
      <news-item v-for="item of information" :news="item" :key="item.newsid"></news-item>
    </div>
    <div class="nomore">只给看这么多</div>
  </div>
</template>

<script>
import { get } from '@/utils'
import config from '@/utils/config'

export default {
  data () {
    return {
      informationBanner: [],
      information: [],
      page: 1
    }
  },
  mounted () {
    this.getNewsList(true)
  },
  methods: {
    async getNewsList (init) {
      if (init) {
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      const newsList = await get(config.newsList, {
        page: this.page
      })
      if (newsList.information.items.length < 10 && this.page > 0) {
        this.more = false
        console.log(this.more)
      }
      if (init) {
        this.information = newsList.information.items
        this.informationBanner = newsList.informationBanner
        wx.stopPullDownRefresh()
      } else {
        // 下拉刷新，不能直接覆盖books 而是累加
        this.information = this.information.concat(newsList.information.items)
      }
      wx.hideNavigationBarLoading()
    }
  }
}
</script>

<style scoped>
swiper {
  width: 100%;
  height: 200px;
}

.slide-image {
  width: 100%;
  height: 100%;
}

swiper .wx-swiper-dot {
  width: 10px;
  height: 10px;
  display: inline-flex;
  margin-left: 20rpx;
  justify-content: space-between;
}

swiper .wx-swiper-dot::before {
  content: "";
  flex-grow: 1;
  border-radius: 50%;
  border: 2px solid #fff;
}

swiper .wx-swiper-dot-active::before {
  background: #fff;
}

.news-wrap {
  padding: 0 10px;
}

.nomore {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
}
</style>
