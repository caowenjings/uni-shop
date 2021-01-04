<template>
	<view class="contact-container">
			<view class="aboutme">
				<image mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605597356922&di=cb031b2f315397edc1a3e6e47404a459&imgtype=0&src=http%3A%2F%2Fwww.green-sep.cn%2Fupfile%2F201701%2F2017012232431521.jpg"></image>
			  <view class="aboutme-icon">
				 <i class="iconfont iconguanyuwomen"></i>
			   	 <text>关于我们</text>
			   </view>
			</view>
			<view class="contact-infor" @click="handleCall">联系电话：135-5886-91（请拨打）</view>
		    <view class="contact-infor">联系地址：四川省成都市世纪城东方希望天祥</view>
			
			<map :latitude="latitude" :longitude="longitude" :scale="scale" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 longitude:104.075144,//经度
				 latitude:30.560685,//纬度
				 scale:17,//缩放
				 covers: [{
				            latitude:30.560685,
				            longitude:104.075144,
				            iconPath: '../../static/img/dingwei.png',
							width:30,
							height:30,
				}]
			}
		},
		methods: {
			handleCall(){
				uni.makePhoneCall({
				    phoneNumber: '135588691'
				});
			}
		}
	}
</script>

<style lang="scss">
	.contact-container{
		.aboutme{
			position: relative;
			height: 150px;
			image{
				width: 100%;
				height: 150px;
			}
			.aboutme-icon{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				color: #fff;
				font-weight: 600;
				font-size: 40rpx;
				letter-spacing: 5rpx;
				display: flex;
				align-items: center;
				i{
					color: $shop-text;
					font-size: 60rpx;
					margin-right: 20rpx;
				}
			}
		}
		
		.contact-infor{
			font-size: 33rpx;
			line-height: 90rpx;
			color: #666;
			padding: 0 20rpx;
			border: 1rpx solid #f7f7f7;
		}
		
		map{
			width: 100%;
			height: 380px;
		}
	}

</style>
