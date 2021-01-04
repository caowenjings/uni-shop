<template>
	<view class="goods-container">
		<good-list :goodDatas="goodDatas" @clickbtn="goDetail"></good-list>
		<view class="bottom" v-if="flag">
			---我是有底线的----
		</view>
	</view>
</template>

<script>
	import goodList from "../../components/goodList.vue"
	export default {
		data() {
			return {
				goodDatas:[],
				addDatas:this.commont.goods,
				pageIndex:1,
				flag:false
			}
		},
		components:{
			"good-list":goodList
		},
		onLoad(){
			this.getGoods();
		},
		// 上拉加载
		onReachBottom(){
			if(this.pageIndex==6)return this.flag=true;//判断触底了，没数据了就不请求了
			this.pageIndex++;
			this.addGoods();
		},
		// 下拉刷新
		onPullDownRefresh(){
			this.pageIndex=1;
			this.flag=false;
			setTimeout(()=>{
				this.getGoods(()=>{
					uni.stopPullDownRefresh();
				});
			}, 1000);
		},
		methods: {
			// 添加数据
			addGoods(){
				this.goodDatas=[...this.goodDatas,...this.addDatas];
			},
			// 获取数据
			getGoods(callclick){
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
			];
			callclick && callclick();
			},
			// 跳转详情页面
			goDetail(){
				uni.navigateTo({
					url:"./Detail"
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods-container{
		background-color: #eee;
		padding-top: 20rpx;
		.bottom{
			width: 100%;
			height: 50px;
			line-height: 50px;
			font-size: 28rpx;
			text-align:center;
			
		}
	}

</style>
