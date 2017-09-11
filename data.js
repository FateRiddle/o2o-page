//1. 考虑先取消一些功能

const space = {
  style,
  place: [],
  price, //?
  viewed,
  favor,
  isRecommand, //推荐空间？
}

const shop = {
  id,
  name,
  address,
  url,
  distance,
}

const person = {
  name,
  phone,
  coupon: coupon.id,
}

const product = {}

const coupon = {
  id,
  content,
  type,
  beginAt,
  endAt, //expired?
  used,
}

const prize = {}

//用户操作：

coupon: filter, get

space: filter, toDetail
