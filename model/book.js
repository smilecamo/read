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
  getDetail(bid) {
    return this.request1({
      url: '/movie/detail.api',
      data: {
        locationId: 290,
        movieId: bid
        },
    })
  }
}

export {
  BookModel
}