<template>
	<view class="goodDetail-container">
		<!-- 轮播图 -->
		<swiper class="swipers" indicator-dots autoplay :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image class="swiper-img"  :src="item.url" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="price">
			<text>$6000</text>
			<text>$6900</text>
		</view>
		<view class="text">
			Redmi K30 5G双模 120Hz流速屏 骁龙765G 前置挖孔双摄 索尼6400万后置四摄 30W快充
		</view>
		<view class="line"></view>
		<view class="box">
			<text>货号：22444</text>
			<text>库存：220</text>
		</view>
		<view class="line"></view>
		<view class="box1">
			<text class="tit">详情介绍</text>
			<view class="con">
				商品名称：小米Redmi K30商品编号：100005920091商品毛重：0.7kg商品产地：中国大陆CPU型号：骁龙765G运行内存：6GB机身存储：128GB存储卡：其它存储卡摄像头数量：后置四摄后摄主摄像素：6400万像素前摄主摄像素：2000万像素主屏幕尺寸（英寸）：6.67英寸分辨率：其它分辨率屏幕比例：19.6~20:9屏幕前摄组合：开孔屏充电器：其他热点：人脸识别，快速充电，NFC，5G，超高屏占比，屏幕高刷新率特殊功能：超大字体，超大音量，语音命令，语音识别(文字语音互转)屏占比：≥90%操作系统：Android(安卓)老人机配置：智能机(老龄模式)
			</view>
		</view>
		<view class="goodDetail_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
		
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				swipers:[
					{
					url:"https://img14.360buyimg.com/babel/s320x320_jfs/t1/113689/15/13806/83369/5f27e768E6e9ea997/f2d56b2d508a4c9b.jpg!cc_320x320",
					},
					{url:'https://img10.360buyimg.com/n1/s180x180_jfs/t1/105181/21/5564/90517/5dee4ac2E1cffccc4/5a6dbbae3533292e.jpg'},
					{url:'https://img13.360buyimg.com/n1/s180x180_jfs/t1/120052/7/3008/80114/5ecbbfc3Ea0d604e1/db6009b69ffdbb21.jpg'},
					],
					  options: [{
					            icon: 'headphones',
					            text: '客服'
					        },  {
					            icon: 'cart',
					            text: '加入心愿',
					            info: 2
					        }],
					        buttonGroup: [{
					          text: '加入心愿',
					          backgroundColor: '#ff0000',
					          color: '#fff'
					        },
					        {
					          text: '立即',
					          backgroundColor: '#ffa200',
					          color: '#fff'
					        }
					        ]
			}
		},
		components: {uniGoodsNav},
		methods: {
			 onClick (e) {
					switch(e.index){
						case 0:
						uni.showToast({
						  title: `点击${e.content.text}`,
						  icon: 'none'
						})
						 break;
						case 1:
						uni.switchTab({
							url:"../Card/Card"
						})
					}
			      },
			      buttonClick (e) {
					switch(e.index){
						case 0:
						 this.options[1].info++
						 break;
					}
			       
			      }
		}
	}
</script>

<style lang="scss">
	.goodDetail-container{
		.swipers{
			width: 100%;
			height: 700rpx;
	    }
		.swiper-img{
		    width: 100%;
		    height: 100%;
		}
		.price{
			margin-top: 10rpx;
			font-size: 35rpx;
			padding: 0 20rpx;
			color: $shop-text;
			text:last-child{
				display: inline-block;
				margin-left: 10rpx;
				font-size: 28rpx;
				color: #999;
				text-decoration: line-through;
			}
		}
		.text{
			font-size: 32rpx;
			padding: 20rpx 10rpx;
		}
		.line{
			height: 10rpx;
			width: 100%;
			background-color: #f7f7f7;
		}
		.box{
			font-size: 32rpx;
			line-height: 70rpx;
			display: flex;
			flex-direction: column;
			padding: 20rpx 10rpx;
		}
		.box1{
			padding: 20rpx 10rpx 50px 10rpx;
			.tit{
				font-size: 32rpx;
			}
			.con{
				font-size: 28rpx;
			}
		}
		.goodDetail_nav{
			width: 750rpx;
			position: fixed;
			bottom: 0;
		}
		
	}

</style>
