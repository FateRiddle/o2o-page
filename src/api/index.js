import axios from 'axios'

//constant
const API_ROOT = 'http://61.164.47.179:8480/o2oshop-service/'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//when refresh,seems to need reset it
// const token = window.localStorage.getItem('token')
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

//first time setToken
const setToken = _token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${_token}`
}

//setting up request
const request = axios.create({
  baseURL: API_ROOT,
})

//methods
// const encode = encodeURIComponent
const responseBody = res => res.data.recordset
const responseOutput = res => res.data

//统一的req_head
const req_head = {
  sign: 'cbb40c9c9a8d7248ab191b0215fa4f05',
  timestamp: '1502423540028',
  app_key: '12345678',
  version: '1.0',
  platform: 'pc',
  partner_id: '0',
}

const ax = {
  del: url => request.delete(url).then(responseOutput),
  get: url => request.get(url).then(responseBody),
  put: (url, body) => request.put(url, body).then(responseOutput),
  post: (url, body) =>
    request.post(url, { req_head, req_data: body }).then(responseOutput), //o2o所有的接口都用post方法
}

const Home = {
  //优惠券查询
  getCoupon: () =>
    ax.post('otofavourinfo/findAll', {
      groupId: 1,
      partnerId: 1,
      storeId: 1,
      page: 0,
      rows: 10,
      direction: 'DESC',
      favourName: '100',
      sort: 'store_id',
      favourType: 'MJ',
      orgaId: 1,
    }),
  addCoupon: () =>
    ax.post('otofavourinfo/add', {
      favourName: '卫浴100元优惠券',
      groupId: 1,
      partnerId: 1,
      storeId: 1,
      favourType: 'MJ',
      orgaId: 1,
      qrCode: '1.jpg',
      qrPicUrl: '1.jpg',
      validBeginDate: '2017-8-18 23:59:59',
      validEndDate: '2017-8-18 23:59:59',
      canUse: 'Y',
      allCount: 1,
      useMoney: 100.0,
      costMoney: 100.0,
      sendType: 'D',
      favourDesc: '抵用100',
      favourMoney: 100.0,
      salePrice: 100.0,
      useRole: '可抵用100元',
      isValid: 'Y',
      storeListId: '1,2,3,4',
      remark: '优惠券',
    }),
  updateCoupon: () =>
    ax.post('otofavourinfo/update', {
      favourId: 1,
      favourName: '卫浴100元优惠券',
      qrCode: 1,
      qrPicUrl: 1,
      favourType: 'MJ',
      orgaId: 1,
      validBeginDate: '2017-8-18 23:59:59',
      validEndDate: '2017-8-18 23:59:59',
      canUse: 'Y',
      allCount: 1,
      saleCount: 1,
      usedCount: 1,
      useMoney: 100.0,
      costMoney: 100.0,
      sendType: 'D',
      favourDesc: '抵用100',
      favourMoney: 100.0,
      salePrice: 100.0,
      updateLogin: 1,
      updateLoginName: 1,
      useRole: '可抵用100元',
      remark: '优惠券',
    }),
  deleteCoupon: () =>
    ax.post('otofavourinfo/delete', {
      favourId: 1,
    }),
}

const Products = {
  getProducts: () =>
    ax.post('otogoodsinfo/findAll', {
      groupId: 1,
      goodsName: ' ',
      storeId: 1,
      page: 0,
      rows: 10,
      direction: 'DESC',
      sort: 'createTime',
    }),
}

// const Auth = {
//   login: (name, password) => ax.post('/auth/login', { user: { name, password } }),
//   signup: (name, password, password2, slogan) =>
//     ax.post('/auth', { user: { name, password, password2 }, slogan }),
// }
//
// const Projects = {
//   all: () => ax.get('/projects'),
//   add: ({ id, title, group }) => ax.post('/projects', { id, title, group }),
//   update: ({ id, title, group }) => ax.put('/projects', { id, title, group }),
//   del: id => ax.put(`/projects/${id}`, { toDelete: true }),
// }

export const test = () => console.log('test')

export default {
  Home,
  Products,
  setToken,
  test,
}

//
// const delay = ms =>
//   new Promise(resolve => setTimeout(resolve,ms))
//
// const fetchState = () => delay(1000).then(() => fakedb)
