<template>
	<view class="goodslist-container">
		<view class="goods-list">
			<view class="good-item" v-for="(item,index) in goodDatas" :key="index" @click="jump(item)">
				<image :src="item.url" mode="aspectFit"></image>
				<view class="price">
					<text>¥{{item.sellPrice}}</text>
					<text>¥{{item.price}}</text>
				</view>
				<text>{{item.title}}</text>
				<text>{{item.text}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:['goodDatas'],
		data() {
			return {
				
			};
		},
		methods:{
			jump(item){
				this.$emit("clickbtn",item.id);
			}
		}
	}
</script>

<style lang="scss">
	.goodslist-container{
		.goods-list{
			padding: 0 20rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.good-item{
				padding: 10rpx;
				box-sizing: border-box;
				background-color: #fff;
				width: 49%;
				margin-bottom: 20rpx;
				image{
					width: 100%;
				}
				.price{
					color: $shop-text;
					font-size: 36rpx;
					text:last-child{
						font-size: 28rpx;
						color:#999;
						margin-left: 10rpx;
						text-decoration: line-through;
					}
				}
				.name{
					font-size: 28rpx;
				}
			}
		}
	}

</style>
