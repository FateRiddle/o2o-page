import axios from 'axios'

//constant
const API_ROOT = 'http://61.164.47.179:8480/o2oshop-service/'

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

const ax = {
  del: url => request.delete(url).then(responseOutput),
  get: url => request.get(url).then(responseBody),
  put: (url, body) => request.put(url, body).then(responseOutput),
  post: (url, body) => request.post(url, body).then(responseOutput), //o2o所有的接口都用post方法
}

const Home = {
  getCoupon: () =>
    ax.post('otofavourinfo/findAll', {
      req_head:
        "{sign: 'cbb40c9c9a8d7248ab191b0215fa4f05',timestamp: '1502423540028',app_key: '12345678',version: '1.0',platform: 'pc',partner_id: '0',}",
      req_data:
        "{groupId: 1,partnerId: 1,storeId: 1,page: 0,rows: 10,direction: 'DESC',favourName: '100',sort: 'store_id',favourType: 'MJ',orgaId: 1,}",
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
  setToken,
  test,
}

//
// const delay = ms =>
//   new Promise(resolve => setTimeout(resolve,ms))
//
// const fetchState = () => delay(1000).then(() => fakedb)
