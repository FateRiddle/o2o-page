<template>
  <div id="tabs">
    <ul class="list flex pl0 justify-around pa3 bg-black white">
      <li v-for="tab in tabs">{{tab.text}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  data: () => ({
    tabs: [
      { value: 'home', text: '首页' },
      { value: 'product', text: '商品' },
      { value: 'space', text: '空间' },
      { value: 'person', text: '个人' },
    ],
  }),
}
</script>
<style scoped>
</style>
