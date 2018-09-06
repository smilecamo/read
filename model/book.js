import {
  HTTP
} from '../util/http-p.js'

class BookModel extends HTTP {
  getHotList() {
    return this.request({
      url: 'Showtime/LocationMovies.api',
      data: {
        locationId: 290
        },
    })
  }
}

export {
  BookModel
}