<template>
	<view class="news-container">
		<news-list  v-for="(item,index) in inforDatas" :key="index" :list="item" @litemclick="handleDetail(item)"></news-list>
	</view>
</template>

<script>
	import newsList from "../../components/newsList.vue"
	export default {
		data() {
			return {
				inforDatas:[
				{
				    id:1,
					url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=663310123,2213098799&fm=173&app=49&f=JPEG?w=312&h=208&s=BFB4CF000E4B6B4F38201DC10300C0B2',
					title:'三大运营商或于年底联合宣布5G消息商用',
					time:'20190203',
					look:'234',
				},
				{   
					id:2,
					url:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=555585971,1163108845&fm=173&app=49&f=JPEG?w=312&h=208&s=BCB7499410010AE31987379E0300C08C',
					title:'4G网速被降速了？实测数据公开，中国移动有点难堪',
					time:'20190203',
					look:'234',
				},
				{
					id:3,
					url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2391287469,273285157&fm=173&app=49&f=JPEG?w=312&h=208&s=3CB847950C5270C0548D05E90300701E',
					title:'元旦春节期间猪肉价格或出现上涨',
					time:'20190203',
					look:'234',
				},
				{
					id:4,
					url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2391287469,273285157&fm=173&app=49&f=JPEG?w=312&h=208&s=3CB847950C5270C0548D05E90300701E',
					title:'元旦春节期间猪肉价格或出现上涨',
					time:'20190203',
					look:'234',
				},
				{
					id:5,
					url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2391287469,273285157&fm=173&app=49&f=JPEG?w=312&h=208&s=3CB847950C5270C0548D05E90300701E',
					title:'元旦春节期间猪肉价格或出现上涨',
					time:'20190203',
					look:'234',
				},
				{
					id:6,
					url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2391287469,273285157&fm=173&app=49&f=JPEG?w=312&h=208&s=3CB847950C5270C0548D05E90300701E',
					title:'元旦春节期间猪肉价格或出现上涨',
					time:'20190203',
					look:'234',
				},
				{
					id:7,
					url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2391287469,273285157&fm=173&app=49&f=JPEG?w=312&h=208&s=3CB847950C5270C0548D05E90300701E',
					title:'元旦春节期间猪肉价格或出现上涨',
					time:'20190203',
					look:'234',
				},{
					id:8,
					url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2391287469,273285157&fm=173&app=49&f=JPEG?w=312&h=208&s=3CB847950C5270C0548D05E90300701E',
					title:'元旦春节期间猪肉价格或出现上涨',
					time:'20190203',
					look:'234',
				}
				]
				
			}
		},
		components:{
			'news-list':newsList
		},
		methods: {
			handleDetail(item){
				// 加密传递的对象数据
				var items = encodeURIComponent(JSON.stringify(item));
				uni.navigateTo({
					url:"./Detail?id="+items
				})
			},
		}
	}
</script>

<style lang="scss">
	
</style>
