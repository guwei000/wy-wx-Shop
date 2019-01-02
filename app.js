App({
  onLaunch: function () {
    try {
      this.globalData.userInfo = JSON.parse(wx.getStorageSync('userInfo'));
      this.globalData.token = wx.getStorageSync('token');
    } catch(e) {
      console.log(e);
    }
  },

  globalData: {
    userInfo: {
      nickName: '点击登录',
      avatarUrl: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    token: '',
  }
})