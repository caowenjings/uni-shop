<template>
	<view class="newDetail-container">
		<text  class="title">{{item.title|formatText}}</text>
		<view class="infor">
			<!-- <text>时间：{{item.time|formatDate}}</text> -->
			<text>时间：{{item.time}}</text> 
			<text>浏览：{{item.look}}</text>
		</view>
		<view class="contant">
		<rich-text :nodes="list[0].text"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:"",
				contant:'',
				list:[
					{id:1,
				text:"搬家前，明明谈妥了是1200多元的搬家费，等东西搬到新地点后，搬家费却坐地涨到了18000元，而且，这么离谱的要价还理直气壮，不给就不走，还扬言即便报警也不怕。这是北京消费者吴女士搬家的遭遇。随后她把搬家经过和经受的恐惧发到了微博上，引起了极大的社会反响和关注。搬个家18000？搬完了冒出天价人头费今年7月，吴女士要从北京市丰台区搬家到朝阳区，路程在30公里左右，她通过百度搜索了词条 “北京搬家公司哪家服务最好”，网页出现排名第一的是“北京四方兄弟搬家公司”，进一步点击进入公司的网站主页，介绍中可以看出这是一家非常有规模的正规搬家公司，于是就拨打了网页上的联系电话。"}]
			}
		},
		filters:{
			formatText(data){
				return data.substring(0,5)
			}
		},
		onLoad(option){
		this.item = JSON.parse(decodeURIComponent(option.id));
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.newDetail-container{
		padding: 0 20rpx;
		box-sizing: border-box;
		.title{
			text-align: center;
			font-size: 30rpx;
			display: block;
			margin: 20rpx 0;
		}
		.infor{
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
		}
		.contant{
			margin-top: 40rpx;
		}
	}

</style>
