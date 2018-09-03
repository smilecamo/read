import { HTTP } from '../util/http.js'
class LikeModel extends HTTP {
  like(behavior, artId, category) {
    // 判断传来的值来进行url的使用
    let url = behavior ==='like'? 'like': '/like/count'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artId,
        Type: category
      }
    })
  }
}

export {LikeModel}