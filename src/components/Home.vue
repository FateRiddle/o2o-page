<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div @click='getCoupon'>
      test2 for you
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    test() {
      api.test()
    },
    getCoupon() {
      return api.Home.getCoupon().then(res => {
        console.log(res)
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
