<template>
  <div class="home bg-white">
    <banner></banner>
    <div class=" mv2 flex justify-around f6">
      <div class="">
        <p class="bb pv2"><i class="icon-tizhi mh2"></i><span>{{store.address}}</span></p>
        <p class="pv2"><i class="icon-juli mh2"></i><span>{{store.distance}}</span></p>
      </div>
      <div class="bl tc w-20">
        <i class="icon-Tditu f2"></i><br>门店导航
      </div>
    </div>
    <div style="background: #e7e7e7" class="flex justify-around pv3">
    <discount v-for="item in discounts.discount" :discountCont="item"></discount>
    </div>

    <activity></activity>
    <h2 class="tc">推荐空间</h2>
    <recommendSpace v-for="item in spaces.space" :spaceCont="item"></recommendSpace>
    <!-- 弹出框 -->

    <!-- 弹出框 -->
  </div>
</template>
<script>
import banner from '../common/banner.vue'
import discount from '../common/discount.vue'
import activity from './activity.vue'
import recommendSpace from './recommendSpace.vue'
import data from '../../assets/data.json'
export default {
  data() {
    return {}
  },
  components: {
    banner,
    discount,
    activity,
    recommendSpace,
  },
  created() {
    this.store = data.store
    this.discounts = data.discounts
    this.spaces = data.spaces
  },
}
</script>
