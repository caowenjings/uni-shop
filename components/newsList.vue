<template>
		<view class="newslist-container" @click="handleDetail">
			<image class="img" :src="list.url" mode="aspectFill"></image>
			<view class="news-infor">
				<view class="news-title">{{list.title}}</view>
				<view class="news-icon">
					<text>发表时间：{{list.time|formatDate}}</text>
					<text>浏览{{list.look}}</text>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		props:['list'],
		filters:{
			formatDate(date){
				// 月加0
				// var s=d.getDay().toString().padStart(2,0)
				return date.substring(0,4)+"-"+date.substring(4,6)+"-"+date.substring(6);
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			handleDetail(){
				this.$emit('litemclick')
			},
		}
	}
</script>

<style lang="scss">
	.newslist-container{
		display: flex;
		padding-left: 10rpx;
		padding-bottom: 5rpx;
		padding-top: 5rpx;
		overflow: hidden;
		border-bottom: 1px solid $shop-text;
		.img{
			width: 200rpx;
			height: 150rpx;
			max-width: 200rpx;
			min-width: 200rpx;
		}
		.news-infor{
			padding: 10rpx 20rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.news-title{
			font-size: 30rpx;
		}
		.news-icon{
			font-size: 24rpx;
			display: flex;
			justify-content: space-between;
			padding-right: 90rpx;
		}
		
	}
	

</style>
