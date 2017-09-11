<template>
  <div id="spaces">
    <div class="mui-content black-60 f6">
			<!--顶栏-->
		    <section class="bg-white flex justify-around items-center f5 mb2" style="height: 2.5rem;">
	    		<div class="flex space-options" value="style">
	    			<div class="pr1">美式风格</div>
	    			<svg class="icon" aria-hidden="true">
					    <use xlink:href="#icon-jiantouxia"></use>
					</svg>
	    		</div>
	    		<div class="flex space-options" value="place">
	    			<div class="pr1">阳台</div>
	    			<svg class="icon" aria-hidden="true">
					    <use xlink:href="#icon-jiantouxia"></use>
					</svg>
	    		</div>
	    		<div class="flex space-options" value="price">
	    			<div class="pr1">1W~2W</div>
	    			<svg class="icon" aria-hidden="true">
					    <use xlink:href="#icon-jiantouxia"></use>
					</svg>
	    		</div>
	    	</section>
	    	<!--选项-->
	    	<section class="detail-options flex flex-wrap justify-around pb2 ph3 hidden">
	    		<div class="bg-white w-25 mv1 mh2 pv1 br1 flex items-center justify-center">
	    			全部
	    		</div>
	    	</section>
	    	<!--空间样本-->
	    	<section>
	    		<img src="http://lorempixel.com/400/250" alt="" />
	    		<div class="relative">
	    			<header class="absolute flex bg-black-30 w-100 items-center justify-around ph3" style="top: -60px; height: 60px;">
	    				<div class="flex flex-wrap">
	    					<div class="white w-100 f5" style="text-shadow: .5px .5px 1px;">现代简约·都市青年</div>
	    					<div class="bg-orange br1 white f7 ma1 ph1 shadow-1">现代简约</div>
		    				<div class="bg-orange br1 white f7 ma1 ph1 shadow-1">厨房/卫生间/客厅</div>
	    				</div>
		    			<div class="white f4" style="text-shadow: .5px .5px 1px;">
		    				<span class="f5">￥</span>8888
		    			</div>
		    		</header>
		    		<main class="bg-white">
		    			<div class="ph3 pv2" style="line-height: 1.5rem;">
		    				现代风格强调功能性设计，线条简约流畅，色彩对比强烈，能给人带来前卫现代风格强调功能性设计
		    			</div>
	    				<div class="f8 black-40 flex justify-between pv1">
	    					<div class="flex items-center ml3">
	    						<img src="" alt="收藏" class="ph1" style="height: 12px;" />
								<span class="mr3">123</span>
								<img src="" alt="浏览数" class='ph1' style="height: 10px;" />
								<span class="mr2">123</span>
	    					</div>
							<a class="toDetail f6 link dim br2 ph3 pv1 mr3 white bg-orange" href="#0">查看</a>
						</div>
		    			<img class="mb3 mt2" src="" alt="" />
		    		</main>
	    		</div>
	    	</section>
		</div>
    <space></space>
  </div>
</template>
<script>
import Space from './Space'
export default {
  name: 'spaces',
  data: () => ({}),
  components: {
    Space,
  },
}
</script>
<style scoped>
</style>
