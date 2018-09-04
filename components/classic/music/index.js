// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js'
const wxAm = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
  },
  detached:function() {
    wxAm.pause()
  },
  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
    src: '',
    playing: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play:function() {
      if(this.data.playing){
        this.setData({
          playing: false
        })
        wxAm.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
      }else{
        this.setData({
          playing: true
        })
        wxAm.pause()
      }
    }
  }
})
