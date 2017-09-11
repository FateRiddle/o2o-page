<template>
  <div id="app" class="vh-100 flex flex-column justify-between debug">
    <router-view></router-view>
    <tabs></tabs>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'
export default {
  name: 'app',
  components: {
    Tabs,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border-width: 0;
}
</style>
