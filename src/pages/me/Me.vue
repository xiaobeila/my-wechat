<template>
  <div class="container">
    <div class="userinfo" @click='login'>
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      userinfo: {
        avatarUrl: '',
        nickName: '点击登录'
      }
    }
  },
  methods: {
    login (e) {
      console.log(e)
      console.log(e.detail.errMsg)
      console.log(e.detail.userInfo)
      console.log(e.detail.rawData)
    }
  },
  onShow () {
    // console.log(123)
    let userinfo = wx.getStorageSync('userinfo')
    // console.log([userinfo])
    if (userinfo) {
      this.userinfo = userinfo
    }
    // console.log(this.userinfo)
  }
}
</script>
