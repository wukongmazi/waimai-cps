// my.js
//获取应用实例
var app = getApp()
var inputinfo = "";
var user_identity = '原创'
var inputWechat = ''
var inputPhone = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: "",
    showModalStatus: false,
    user_identity: user_identity,
    title_hint: '请填写',
    logo: 'https://pengmaster.com/party/wechat/marry/gwtx_zip/HY2A1088.jpg'
  },
  onLoad: function() {
    console.log('onLoad')
    var that = this
    that.downLoadLogo()
    //更新数据
    that.setData({
      userInfo: app.globalData.userInfo,
      
    })
  },
  /**
   * 下载用户图片
   */
  downLoadLogo: function() {
    var that = this
    
  },
  btnMyCreateInfo: function() {
    wx.navigateTo({
      url: 'flow/flow'
    })
  },
  btnMyCreate: function() {
    var that = this
    if (undefined != app.globalData.openId && "" != app.globalData.openId) {
      this.setData({
        showModal: true
      })
    } else {
      wx.showModal({
        title: '提示',
        content: "未获取到openId，不允许创建！！",
        showCancel: false
      })
    }
  },
  //关于我
  btnAboutMy: function() {
    wx.navigateTo({
      url: 'aboutus/aboutus'
    })
  },
  //项目简介
  btnCommonQuestion: function() {
    wx.navigateTo({
      url: 'aboutProject/aboutProject'
    })
  },
  /**
   * 上传头像
   */
  uploadLogo: function() {
    if (!app.globalData.isOfficial) {
      this.chooseImage()
    }

  },
  /**
   * 选择图片
   */
  chooseImage: function() {
    var that = this;
    
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function() {},
  /**
   * 隐藏模态对话框
   */
  hideModal: function() {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function() {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function() {
    var that = this
    if ('' == inputPhone) {
      that.setData({
        title_hint: '请填写手机号'
      })
    } else if ('' == inputWechat) {
      that.setData({
        title_hint: '请填写微信号'
      })
    } else {
      that.saveHostUser()
      that.hideModal();
    }
  },

  /**
   * inputChangePhone
   */
  inputChangePhone: function(e) {
    inputPhone = e.detail.value
  },
  /**
   * inputChangePhone
   */
  inputChangeWechat: function(e) {
    inputWechat = e.detail.value
  },

  /**
   * 保存用户
   */
  saveHostUser: function() {
    var that = this
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    var that = this;
    //console.log(that.data);
    return {
      title: '诚意邀请你参加我们的婚礼',
      imageUrl: 'https://pengmaster.com/party/wechat/marry/tai_miao/HY2A0764.jpg',
      path: "pages/home/home",
      success: function(res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
  btnShareFriends: function() {
    wx.showModal({
      title: '提示',
      content: "客官加群或者微信吧！！",
      showCancel: false
    })
  }
})