<template>
  <div class="banner">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {'url': '/static/img/dianpubanner.8b98d1d.png'},
          {'url': '/static/img/dianpubanner.8b98d1d.png'},
          {'url': '/static/img/dianpubanner.8b98d1d.png'}
        ]
      }
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 175px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
.el-carousel__container{height:170px;}
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
