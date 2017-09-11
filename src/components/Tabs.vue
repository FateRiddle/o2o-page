<template>
  <div id="tabs">
    <ul class="list flex pl0 justify-around pa3 bg-black">
      <li class="" v-for="tab in tabs">
        <router-link class="white no-underline" :to='tab.path'>
          {{tab.text}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  data: () => ({
    tabs: [
      { path: '/', text: '首页' },
      { path: '/products', text: '商品' },
      { path: '/spaces', text: '空间' },
      { path: '/person', text: '个人' },
    ],
  }),
}
</script>
<style scoped>
</style>
