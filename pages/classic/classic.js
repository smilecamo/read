import { ClassicModel } from '../../model/classic.js'
// import { LikeModel } from '../../model/like.js'
// 实例化对象
let classic = new ClassicModel()
// let LikeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  // data 中数据 wxml 可以直接使用
  data: {
    classic: '',
    first: false,
    next: true,
    num: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request 异步
    classic.getLatest((res) => {
      console.log(res);
      // 数据更新   this.setData设置更新数据
      this.setData({
        classic: res.ms[this.data.num],
      })
    })
  },
  // 自定义事件
  onLike: function(event) {
    // 获取是否喜欢
    let behavior = event.detail.behavior
    // LikeModel(behavior, this.data.classic.id,this.data.classic.type)
  },
  // 自定义事件
  onNext:function(event) {
    classic.getLatest((res) => {
      let num = this.data.num += 1
      let first = num > 20 ? true : false
      let next = num <= 0 ? true : false
      this.setData({
        classic: res.ms[num],
        first: first,
        next: next,
        num: num
      })
    })
  },
  onPrevious:function(event) {
    classic.getLatest((res) => {
      let num = this.data.num -= 1
      let first = num > 20 ? true : false
      let next = num <= 0 ? true : false
      this.setData({
        classic: res.ms[num],
        first: first,
        next: next
      })
    })
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
  onShareAppMessage: function () {

  }
})