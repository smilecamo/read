import { HTTP } from '../util/http.js'
// extends:继承类
class ClassicModel extends HTTP {
  getLatest(sCallabck) {
    this.request({
      url: 'Showtime/LocationMovies.api',
      data: {
        locationId: 290
      },
      success: (res) => {
        // 必须sCallabck返回
        sCallabck(res)
      }
    })
  }
}

export {ClassicModel}