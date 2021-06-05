Page({

  /**
   * 页面的初始数据
   */
  data: {
      modalHidden: true,
      nick_name:'',
      avatar_url:'',
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      canIUseGetUserProfile: false,
      canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // var that = this
      // wx.getStorage({
      //     key: 'msg',
      //     success: function (res) {
      //         // console.log(res.data)
      //         that.setData({
      //             nick_name: res.data.nick_name,
      //             avatar_url: res.data.avatar_url
      //         })
      //     }
      // })
      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  toAdvisePage:function(){    //跳转到意见反馈页面
      wx.navigateTo({
          url: '../advise/advise'
      })
  },
  toAboutusPage: function () {    //跳转到关于我们
      wx.navigateTo({
          url: '../aboutus/aboutus'
      })
  },
  toMytestPage:function(){
      wx.navigateTo({
          url: '../mytest/mytest'
      }) 
  },
  /**
   * 订阅消息
   */
  toSubMessage() {
    wx.requestSubscribeMessage({
      tmplIds: ['Wj0g9PsVQyegDk-0wcRYfAgUGvOtK88vFuT-geINWG8'],
      success (res) {
        console.log('toSubMessage success', res['Wj0g9PsVQyegDk-0wcRYfAgUGvOtK88vFuT-geINWG8']);
        if (res['Wj0g9PsVQyegDk-0wcRYfAgUGvOtK88vFuT-geINWG8'] == 'accept') {
          wx.showToast({
            title: '订阅成功',
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: '别拒绝呢',
            icon: 'error',
            duration: 2000
          })
        }
      },
      fail (res) {
        console.log('toSubMessage fail', res);
        wx.showToast({
          title: '订阅失败',
          icon: 'error',
          duration: 2000
        })
      },
      complete (res) {
        console.log('toSubMessage complete', res);
      }
    })
  },

  /**
   * 显示弹窗
   */
  toContact() {
    this.setData({
      modalHidden: false
    })
  },

  /**
   * 点击取消
   */
  modalCandel() {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   *  点击确认
   */
  modalConfirm() {
    // do something
    this.setData({
      modalHidden: true
    })
  }
})