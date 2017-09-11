<template>
  <div id="product" class="ma1 ba b--black-10">
    <div class="flex justify-center">
      <img :src="p.shop[0].picSmallUrl" alt="pic" />
    </div>
    <!--文字-->
    <div class="pa2">
      <div class="black-60 f6 mb2">{{p.goodsName}}</div>
      <section class="relative black-50 f7">
        <div class="w-60">规格颜色：00*00</div>
        <div class='w-60'>指导价：<span class='red'>￥{{p.goodsPrice}}</span></div>
        <a class="absolute bottom-0 right-0 f6 link dim br2 ph3 pv1 white bg-orange"
        href="#0">查看</a>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product',
  data: () => ({}),
  props: ['p'],
  mounted() {
    //do something after mounting vue instance
    console.log(this.p.shop[0])
  },
}
</script>
<style scoped>
</style>
