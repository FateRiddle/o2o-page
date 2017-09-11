<template>
  <div class="">
  <div class="rcSpace relative">
    <img class="db" style="height:230px;" :src="spaceCont.url" alt="">
    <div class="pv2 ph4 bg-black-20 w-100 absolute bottom-0 justify-between">
      <div class="w-70 fl flex flex-wrap tl">
        <span class="f4 w-100 white">{{spaceCont.spaceTitle}}</span>
        <span class="pa1 ma1 f7 bg-orange white">{{spaceCont.spaceKyWord}}</span>
        <span class="pa1 ma1 f7 bg-orange white">{{spaceCont.spaceKyWord1}}</span>
      </div>
      <span class="db w-30 fr tr white f4">{{spaceCont.price}}</span>
    </div>
  </div>
    <p class="pa2 lh-copy">{{spaceCont.priceIntroduce}}</p>
    <div class="flex justify-between bb b--black-20 ph2 mv3 pb3">
      <div class="pt2">
        <i :class="spaceCont.icon"></i>
        <span class="mh2">{{spaceCont.favoriteNum}}</span>
        <i :class="spaceCont.icon"></i>
        <span class="mh2">{{spaceCont.favoriteNum}}</span>
      </div>
      <input class="white bn pv2 ph4 bg-orange" type="button" value="查看">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['spaceCont'],
    data () {
      return {

      }
    }
  }
</script>
<style>
</style>
