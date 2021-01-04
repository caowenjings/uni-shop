<template>
	<view class="home-container">
	<!-- 轮播区 -->
	 <swiper class="swiper" indicator-dots indicator-color="rgba(255,250,250)" 
	  indicator-active-color="rgba(105,105,105)"
	  circular autoplay>
	     <swiper-item v-for="item in swipers" :key="item.id">
	        <image :src="item.url" mode="scaleToFill"></image>
	     </swiper-item>
	</swiper>
	<!-- 导航区 -->
	<view class="nav-box">
		<view class="nav-item" v-for="item in nativeDatas" :key="item.id" @click="navItemClick(item)">
			<view class="icon-box">
				<!-- <i class="iconfont" :class="item.icon"></i> -->
					<i class="iconfont" :class="item.icon"></i>
			</view>
			<text>{{item.name}}</text>
		</view>
	</view>
	<!-- 推荐商品区 -->
	<view class="hot-goods">
		<view class="title">推荐商品</view>
		<good-list :goodDatas="goodDatas" @clickbtn="goDetail"></good-list>
	</view>
			
	</view>
</template>

<script>
	import goodList from '../../components/goodList.vue'
	export default {
		data() {
			return {
				swipers:[
					{id:1,url:'https://img30.360buyimg.com/babel/s1980x932_jfs/t1/135422/23/15857/80474/5fae21a2Ea328ba12/6d8787c8c7d9fe8d.jpg!cc_1980x932'},
					{id:2,url:'https://img30.360buyimg.com/babel/s1980x932_jfs/t1/127319/5/18578/93905/5fae318eE0524508f/1e4a126ac99dfe38.png!cc_1980x932'},
					{id:3,url:'https://img20.360buyimg.com/babel/s1980x932_jfs/t1/152362/4/5800/123036/5fae487dEf7a878c2/55d045872c419e20.jpg!cc_1980x932'},
					],
				nativeDatas:[
					{id:1,name:'小马超市',icon:'iconshu1',path:'../goods/goods'},
					{id:2,name:'联系我们',icon:'iconguanyuwomen1',path:'../contact/contact'},
					{id:3,name:'社区图片',icon:'iconshequ',path:'../pics/pics'},
					{id:4,name:'学习视频',icon:'iconshipin1',path:'../videos/videos'},
				],
				goodDatas:[]
			}
		},
		onLoad() {
         this.getHotsGoods()
		},
		components:{
			'good-list':goodList
		},
		methods: {
			hanldeGet1(){
				this.$http.get('register/electronic_document',{}
				).then(res=>{
					console.log(444,res)
				})
			},
			getHotsGoods(){
				this.goodDatas=[
					{
					id:1,
					title:"vivo S7 5G手机",
					text:"8GB+128GB 莫奈漫彩",
					url:"https://img14.360buyimg.com/babel/s320x320_jfs/t1/113689/15/13806/83369/5f27e768E6e9ea997/f2d56b2d508a4c9b.jpg!cc_320x320",
					price:"2980",
					sellPrice:"2000",
					},
					{
					id:2,
					title:"Galaxy A71 5G",
					text:"双模5G 6400万后置四摄",
					url:"https://img30.360buyimg.com/babel/s320x320_jfs/t1/137504/23/7407/105232/5f3d1e32Ec3a9598b/64332079e66a291c.jpg!cc_320x320",
					price:"2980",
					sellPrice:"2000",
					},
					{
					id:3,
					title:"Pro 12GB+256GB",
					text:"联想拯救者电竞手机",
					url:"https://img13.360buyimg.com/babel/s320x320_jfs/t1/149177/15/3457/117920/5f16cf3dEe0375d2a/41b1855a5ad94923.jpg!cc_320x320",
					price:"2980",
					sellPrice:"2000",
					},
					{
					id:4,
					title:"双模5G 骁龙765G 50倍",
					text:"小米10青春版 ",
					url:"https://img20.360buyimg.com/babel/s320x320_jfs/t1/151865/30/431/102453/5f681c09Ef003ae35/4890e8f36a55ebfb.jpg!cc_320x320",
					price:"2980",
					sellPrice:"2000",
					},
					]
			},
			// 导航点击
			navItemClick(item){
				uni.navigateTo({
					url:item.path
				})
			},
			// 跳转详情页面
			goDetail(){
				uni.navigateTo({
					url:"../goods/Detail"
				})
			}
		}
	}
</script>

<style  lang="scss">
	.home-container{
		.swiper{
			width: 750rpx;
			height: 400rpx;
			image{
				width: 750rpx;
			}
		}
		.nav-box{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 20rpx;
			margin-top: 20rpx;
		}
		.nav-item{
			width: 25%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.icon-box{
				border: 1rpx solid red;
				width: 120rpx;
				background-color: #d81e06;
				height: 120rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
			i{
				color: #fff;
				font-size: 50rpx;
				font-weight: 550;
			}
			}
			text{
				display: inline-block;
				font-size: 30rpx;
				color: #222;
				margin: 20rpx 0;
			}
		}
		
		.hot-goods{
			background-color: #eee;
			overflow: hidden;
			.title{
				display:block;
				color:$shop-text;
				height: 90rpx;
				line-height: 90rpx;
				letter-spacing: 20rpx;
				text-align: center;
				border-top: 1rpx solid #eee;
				border-bottom: 1rpx solid #eee;
				background-color: #fff;
				margin: 10rpx 0;
			}
		}
	}


</style>
