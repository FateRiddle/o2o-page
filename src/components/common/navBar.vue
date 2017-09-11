<template>
  <div class="navBar">
    <ul class="fixed z-1 flex justify-between ph4 tc w-100 bottom-0 list bg-black">
      <li class="pv2">
        <router-link class="white no-underline" to="/home"><i class="icon-shouye"></i><br>首页</router-link>
      </li>
      <li class="pv2">
        <router-link class="white no-underline" to="/space"><i class="icon-kongjian"></i><br>空间</router-link>
      </li>
      <li class="pv2">
        <router-link class="white no-underline" to="/commodity"><i class="icon-shangp"></i><br>商品</router-link>
      </li>
      <li class="pv2">
        <router-link class="white no-underline" to="/personage"><i class="icon-gerenzhongx "></i><br>个人</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
