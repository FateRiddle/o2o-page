<template>
  <div>
  <div class="discount mh2 relative" @click="visible" >
    <div class="br2 bg-white">
      <div class="bg-orange tc pt3 br2 br--top mb2  white">
      <i style="font-size:30px;" :class="discountCont.icon"></i><br>
        <span class=" db pt2 pb3">{{discountCont.discountState}}</span>
      </div>
      <div class="pa2">
        <span class="db tc pb2 b black-40">{{discountCont.discountDisc}}</span>
        <span class="db tc pb2 b">{{discountCont.discountText}}</span>
        <span style="border-top: dashed 1px #ccc;" class="db tc pb2 b pt2 black-40">{{discountCont.discountLimit}}</span>
        <span class="db f7 tc pb2">{{discountCont.discountTime}}</span>
      </div>
    </div>
    <div style="top:150px;" class="absolute w-100">
      <div style="margin-left: -4px; background: #e7e7e7;" class="w-50 h-25 br-100 borderRadius fl rotate-90"></div>
      <div style="margin-right: -4px; background: #e7e7e7;" class="w-50 h-25 br-100  borderRadius fr rotate-270"></div>
    </div>
  </div>
   <transition name="fade">
    <div v-show="seen" class="w-100 h-100 absolute z-2 absolute--fill bg-black-50">
      <div style="background: url('/static/dialog.png')no-repeat center/contain; height: 300px; top:50%; left:50%; transform: translate( -50%,-50%)" class="w-100 center absolute  bg-center contain" >
        <div class="mt6 center" style="width:250px">
        <p class="f6">输入您的手机号:<span class="f6 red">马上领取1000元满减券</span></p>
        <form action="">
          <div class="relative">
          <input style="background: #f4f4f4;" class="h2 mb2 w-100 bb bt-0 bl-0 br-0 outline-0 b--black-20 outline-l" type="tel" placeholder="请输入手机号"><span class="ba f6 pa1 absolute right-0">发送验证码</span>
          </div>
          <input style="background: #f4f4f4;" class="h2 mb2 w-100 bb bt-0 bl-0 br-0 outline-0 b--black-20 outline-l" type="tel" placeholder="请输入手机验证码">
          <div>
            <div class="flex justify-around">
          <input class="bg-white ph2 pv1 bn br2" @click="hidden" type="button" value="下次再说">
          <input class="bg-dark-red ph2 pv1 bn br2 white" @click="hidden" type="button" value="立即领取">
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
   </transition>
  </div>
</template>
<script>
  export default {
    props: ['discountCont'],
    data () {
      return {
        seen: false
      }
    },
    methods: {
      visible () {
        this.seen = true
      },
      hidden () {
        this.seen = false
      }
    }
  }
</script>
<style>
  .borderRadius{
    width: 20px;
    height: 15px;
    border-radius: 10px 10px 0 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
</style>
