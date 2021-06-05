// pages/takeaway/takeaway.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    projects: [],
    swiperColor: '',
    topNavHeight: '',

    imgUrls: [],
    imgUrls0: [
      {
        title: '美团外卖重磅推出最高68元券包',
        imgUrl: 'https://ysd-1300312604.cos.ap-shanghai.myqcloud.com/goods/goods_editor/20210507/d5e97ace985e4e60aa3ed427c8998b6a.png',
        appId: 'wxde8ac0a21135c07d',
        path: 'index/pages/h5/h5?weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D1%26p%3DOWMpZ-uzIFOVe6JyOONs3dXuqV0qcAf-r-KCvHdXiNeN5Vmjp4xMwqjh9PJLMc670t0Yt-GKCt5eGT0_d7ZcxguBMyho11Pd0uSkrNieTGxM2lZ4eHO654qZQI1yK_ZumSFQhhxIfX-tvsMUvqHg--74d7aIe01CXdHrwk748czPkxuszwhaCz1DoGZkD2TOqAjF-doA5cGFx-ZPnXhv9O6xZTyPCDRJRE3ArR_r1fqUWyz00EeFdDf7Iby5vL2pObjM386jR4dt3CdEzTvnjSsl60CjwhAObFAIyEIPiQ3_r0kMsnOLq5ZQUdXjwDhMXS11-rIdtwzPy5JncMb9w6vuV-8FKeu0iYv3XjqORIFbyr1_h_8zwYkKT64cNC2GB7DQiW6WDic-ZF6yC7aLpT2EM-DoiBE9azM1K0hqH4R5UfkEdc3W68wQxOaxsZ8gPXvJRaZ2s501RMAi0zEKM70fjXDzUNS8-_mTaI2q8bKnSYMyYiAKyfzBKkCzMWh6cU0IWvThJYvz1h6ytMu_fsYZ8f8oGMoIUHRk452XXAwPYJUiU7LBOS8q6DOWrPzn6eSdDm7jqqCY4Mgy9Tp3LRJCIhwO9IuvvYmothqwRT9Qn4GSSgJzjaPYbb2D8zuFtq4tPzxh3T0oMsdJHlI3fiYsvmcLURozu4wZY9mPWTyJygbQ0E697z2pzt4NF9OgpywplXcpxsnUGHOZMx3fCA&lch=cps:waimai:5:57a89c8d239bf22e137d4de10ef54f0e:ysd202010mtlm&f_token=1&f_userId=1'
      },
      {
        title: '饿了么外卖红包领不停',
        imgUrl: 'https://ysd-1300312604.cos.ap-shanghai.myqcloud.com/goods/goods_editor/20210517/36389fd5e8af4b6586f59455dc7acb73.png',
        appId: 'wxece3a9a4c82f58c9',
        path: 'pages/sharePid/web/index?scene=https://s.click.ele.me/2NfGLvu'
      },
      {
        title: '美团商超生鲜红包天天领，最高34元红包',
        imgUrl: 'https://ysd-1300312604.cos.ap-shanghai.myqcloud.com/goods/goods_editor/20201028/fffdb3d19d214d8eb9f07d11fc70c213.png',
        appId: 'wxde8ac0a21135c07d',
        path: 'index/pages/h5/h5?weburl=https%3A%2F%2Frunion.meituan.com%2Furl%3Fkey%3D50db63edc5aed1e6bb286fb88869e12f%26url%3Dhttps%253A%252F%252Fi.meituan.com%252Fawp%252Fhfe%252Fblock%252Fc9ff59b58f6f5bf385b6%252F94455%252Findex.html%253Fappkey%253D50db63edc5aed1e6bb286fb88869e12f%253Amgmy202008mtlm%26sid%3Dmgmy202008mtlm&lch=cps:waimai:5:50db63edc5aed1e6bb286fb88869e12f:mgmy202008mtlm&f_token=1&f_userId=1'
      },
      {
        title: '饿了么果蔬生鲜天天特价',
        imgUrl: 'https://ysd-1300312604.cos.ap-shanghai.myqcloud.com/goods/goods_editor/20210517/ace6be7d708342ae87b316f0ad197bf5.png',
        appId: 'wxece3a9a4c82f58c9',
        path: 'pages/sharePid/web/index?scene=https://s.click.ele.me/ai4GLvu'
      }
    ],
    imgUrls1: [
      {
        title: '想喝咖啡还是奶茶？送你100元抵用金，任你挑选',
        imgUrl: 'https://ysd-1300312604.cos.ap-shanghai.myqcloud.com/goods/goods_editor/20201029/b213dbbc21fb4bce84b09ee7ffc3d3f5.png',
        appId: 'wx21c7506e98a2fe75',
        path: 'pages/share/inviter/inviter?locationType=1&shareType=3&target=gaBicQgDXr8qiDF_xiCKsA==&activityNo=NR201810220001'
      },
      {
        title: '85折买电影票，领优惠券折上折',
        imgUrl: 'https://ysd-1300312604.cos.ap-shanghai.myqcloud.com/goods/goods_editor/20201029/3558dd23861441ee892caf16e6cc6c52.png',
        appId: 'wxc728fd458500c668',
        path: 'pages/movie/index?scene=ouCRk1n8xOWHGqGH03-7Tw50sul8'
      }
    ],
    imgUrls2: [
      {
        title: '花小猪打车首单立减，邀请你免费打车',
        imgUrl: 'https://ysd-1300312604.cos.ap-shanghai.myqcloud.com/goods/goods_editor/20201019/962f7654f76d4292b4c165bf8b2bb7fe.png',
        appId: 'wxd98a20e429ce834b',
        path: 'p2p/views/index/index?jump_home=1&f_dpsid=6abf323be0b24d39b05417f8119d6423&latitude=24.7271728515625&g_channel=a6bf5c60a97bdc1272282cdd45c79d38&channel=2001001001&share_code=bu08qvdailtggvq3q1rg&dchn=XzXQoBP&entrance_channel=2001001001&root_xpsid=112c32f8aaec4c46b952b9f69c0f98ef&xpsid=112c32f8aaec4c46b952b9f69c0f98ef&f_xpsid=112c32f8aaec4c46b952b9f69c0f98ef&channel_id=2001001001&longitude=118.12675476074219&city_id=32'
      },
      {
        title: '滴滴出行暖心包，送你惊喜出行券',
        imgUrl: 'https://ysd-1300312604.cos.ap-shanghai.myqcloud.com/goods/goods_editor/20201019/1832a34a734a45268d4d78a4a60be884.png',
        appId: 'wxaf35009675aa0b2a',
        path: 'passenger-recommend/views/homepage/index?scene=14&channel_id=1100000090&fromCoupon=self&share_level=1&first_uid=286475040583453&root_dchn=w0WWXX&share_uid=286475040583453&template=1'
      },
      {
        title: '团油加油满100返100加油金',
        imgUrl: 'https://ysd-1300312604.cos.ap-shanghai.myqcloud.com/goods/goods_editor/20201019/2b7bd7989a4443f4b45d5d6282a92363.png',
        appId: 'wx1f1ea04b716771be',
        path: 'pages/index/index?modal=sharedPage&inviteCode=5446019&activityCode=d96cad1f&sampshare={"i":"68768045","p":"pages/hunter/pages/hunterActivity/index","d":1}'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2600,
    duration: 1200,
    swiperCurrentIndex: 0,
    navList: [
    //   {
    //   title: '全部',
    //   materialId: 0
    // },
    {
      title: '外卖生鲜',
      materialId: 0
    }, {
      title: '咖啡电影',
      materialId: 1
    }, {
      title: '打车加油',
      materialId: 2
    }],
    navIndex: 0

  },

  selectNavIndex(e) {
    let {
      index,
      materialid
    } = e.currentTarget.dataset;
    if (this.data.navIndex != index) {
      this.setData({
        navIndex: index,
      }, () => {
        this.getProjects();
      })
    }
  },
  getProjects() {
    this.setData({
      imgUrls: [],
    })
    if (this.data.navIndex == 0) {
      this.setData({
        imgUrls: this.data.imgUrls0,
      })
    } else if (this.data.navIndex == 1) {
      this.setData({
        imgUrls: this.data.imgUrls1,
      })
    } else {
      this.setData({
        imgUrls: this.data.imgUrls2,
      })
    }
  },
  enterDetail(e) {
    let {
      appId,
      path
    } = e.currentTarget.dataset;
    wx.navigateToMiniProgram({
      appId,
      path,
      success(res) {}
    })
  },
  //获取顶部导航栏高度
  getTopNavHeight(e) {
    this.setData({
      topNavHeight: e.detail.topNavHeight
    })
    console.log(e.detail.topNavHeight)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProjects();
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getProjects();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '这里有好多美团饿了么优惠券，快来领券吧~~',
      path: '/pages/takeaway/takeaway',
      imageUrl: this.shareImage
    }
  },

  /**
   * 转发朋友圈
   */
  onShareTimeline: function() {

  }
})