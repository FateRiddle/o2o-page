import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import createLogger from 'vuex/dist/logger'

const store = new Vuex.Store({
  modules: {
    products,
  },
  plugins: [createLogger()],
})
