<template>
  <div id="person">
    person
    <router-link :to="`${path}duct`">to home</router-link>
  </div>
</template>
<script>
export default {
  name: 'person',
  data: () => ({
    hidden: true,
    path: 'pro',
  }),
}
</script>
<style scoped>
</style>
