<template>
  <div class="flex flex-column vh-100">
      <section class="ma2 bg-white relative h2 flex">
        <input id='search' class="pa1 w-40 bn" style='font-size: 11px;padding-left: 33px;' placeholder="" />
        <div class="pa1 f5 b black-50">全部商品</div>
      </section>
      <section class="bg-white flex-auto vh-100 flex flex-wrap items-start overflow-y-auto">
        <!--单品展示组件-->
        <div class="w-50 border-box" v-for="p in products">
          <product :p="p"></product>
        </div>
      </section>
  </div>
</template>
<script>
import Product from './Product.vue'
import api from '@/api'
export default {
  name: 'products',
  data: () => ({
    products: [],
  }),
  components: {
    Product,
  },
  created() {
    api.Products.getProducts().then(res => {
      console.log(res)
      this.products = res
    })
  },
}
</script>
<style scoped>
</style>
