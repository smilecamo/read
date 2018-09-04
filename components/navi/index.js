// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: String,
    first: Boolean,
    next: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function() {
      if(!this.properties.next){
        // 触发自定义事件
        this.triggerEvent('left', {}, {})
      }
    },
    onRight:function() {
      if(!this.properties.first){
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
