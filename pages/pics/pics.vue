<template>
	<view class="pics-container">
		<scroll-view scroll-y class="pics-left">
			<view
			 v-for="(item,index) in selectData"
			 :key="index"
			 @click="handleClickLeft(index)"
			 :class="active==index&&'active'">{{item.name}}</view>    
		</scroll-view>
		
		<scroll-view scroll-y class="pics-right">
			<view v-for="(item,index) in selectImg" :key="index">
				<image :src="item.url" mode="aspectFill" @click="handelPreviewImg(item.url)"></image>
				<text>{{item.text}}</text>
			</view>
			<view class="nodata" v-if="selectImg.length==0">
				暂无数据
			</view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:0,
				selectImg:[],
				textData:[
					{data:[
					{url:'http://img10.360buyimg.com/imgzone/jfs/t1/36432/34/899/77779/5cad9a28E473ea157/af5db7c5c778319d.jpg',
					text:"小巧身驱，轻盈便携 ，机生重量不足200g，运行超静音，无论是手持还是桌面立体使用"},
					{url:'https://img10.360buyimg.com/imgzone/jfs/t1/18452/5/10794/365767/5c8b0414E3136ce12/c1b0f69af508edfd.jpg',
					text:"nome诺米 网红同款门店断货 持久淡香香水"},
				]},
				{
					data:[
						{url:'http://img.cndesign.com/Works/20201105/8fd2f412632147699cf27d81c8184221.jpeg',
						text:"专注高端美食摄影与美食造型，不断探索美食本身的魅力与特质，力求找到属于食物各自的故事"},
						{url:'http://img.cndesign.com/Works/20201104/1686156d0a22405aa4ce0611e5df6bbc.jpeg',
						text:"仪式感就是使某一天与其他日子不同，使某一时刻与其他时刻不同！"},
					]
				},
				{
					data:[
						{url:'http://pic1.win4000.com/wallpaper/c/57c7851e7dd00.jpg',
						text:"专注高端美食摄影与美食造型，不断探索美食本身的魅力与特质，力求找到属于食物各自的故事"},
						{url:'https://img.tupianzj.com/uploads/allimg/201116/37-201116100915.jpg',
						text:"关晓彤上挑眼线性感迷人写真！"},
					]
				},
				{
					data:[
						{url:'http://www.4008699028.com/templets/default/static/images/customization_1.png',
						text:"专注高端美食摄影与美食造型，不断探索美食本身的魅力与特质，力求找到属于食物各自的故事"},
						{url:'http://www.4008699028.com/templets/default/static/images/customization.png',
						text:"仪式感就是使某一天与其他日子不同，使某一时刻与其他时刻不同！"},
						{url:'http://www.4008699028.com/uploads/allimg/200924/4-200924110AI91.JPG',
						text:"客厅沙发、背景墙搭配设计，使某一时刻与其他时刻不同！"},
					]
				},
				{
					data:[
						{url:'http://www.tattoojd.com/wp-content/uploads/2019/12/a107.jpg',
						text:"灶具尺寸，中式风格别墅客厅沙发"},
						{url:'http://www.bbweixiu.com/wp-content/uploads/2019/08/72.jpg',
						text:"这类房子不仅可以减轻经济上的负担，还能满足我们的基本居住需求"},
						{url:'http://www.gz360go.com/wp-content/uploads/2019/12/a4.jpg',
						text:"旧墙面如何翻新最省事 旧墙翻新四大步骤"},
					]
				},
				{
					data:[
						{url:'http://www.htbl.net/template/htbl/images/about02.jpg',
						text:"长期专注于以品牌策略为导向的广告片、宣传片创作"},
						{url:'http://chengdu.htbl.net/template/htbl/images/case2/case01.jpg',
						text:"为企业提供具有个性化创意的视频营销内容"},
						{url:'http://www.htbl.net/template/htbl/images/about04.jpg',
						text:"为品牌注入情感和文化，让品牌的智慧触达目"},
					]
				},
				{
					data:[
						{url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1148191270,1180637528&fm=173&app=49&f=JPEG?w=312&h=208&s=5F7A39C5768204E68CD9249703008042',
						text:"买到相机之后，建议大家多看说明书，说明书是大家熟悉相机的好帮手"},
						{url:'https://5b0988e595225.cdn.sohucs.com/images/20180327/3d37277a348a40f8926740ccc0572ad1.jpeg',
						text:"明白ISO、光圈、快门三个之间的关系：单反相机有3个很关键的因素，一个是ISO可以控制光圈，一个是光圈可以控制图片的背景的虚化，一个是快门，可以拍摄高速或者慢速的物体。"},
					]
				},
				{
					data:[
						{url:'http://www.godox.com.cn/Private/g3/M00/36/61/CgAH6F59qfaAL56nAACeswlTdFw663.jpg',
						text:"功率强劲，圆形灯头&机身，小巧便携。大容量锂电池与机身一体，可更换不同卡盘安装各类光效附件。全面支持各品牌相机TTL"},
						{url:'http://www.godox.com.cn/Private/g3/M00/37/CE/CgAH6F6DGHiAFVzQAAA3TzF2BTU515.jpg',
						text:"神牛1200Ws TTL电箱套装AD1200Pro包含轻巧的分体灯头和大容量电箱，功率强劲，户外强光拍摄环境"},
						{url:'http://www.godox.com.cn/Private/ProductImg/Small/6373386266158225201358812502.jpg',
						text:"专为AD1200Pro设计，高品质R1200环形灯头功率高达1200Ws，光效均匀柔和，可打造无影光质"},
					]
				},
				{
					data:[
						{url:'https://5b0988e595225.cdn.sohucs.com/images/20180327/653c2e9225ee49bea13c49ac4f87defb.jpeg',
						text:"穷其一生也未见得能真正懂得其中的奥妙与精髓"},
						{url:'https://5b0988e595225.cdn.sohucs.com/images/20180327/3c5505e5f1044f4eb54029513b87bc28.jpeg',
						text:"因为她能记录过往，记录眼所未见"},
						{url:'https://5b0988e595225.cdn.sohucs.com/images/20180327/6b5829b956324fc1850106bcd9b9b887.jpeg',
						text:"。",},
						{url:'https://5b0988e595225.cdn.sohucs.com/images/20180327/ec94d5f6cd0b41858a6e54894e52c90b.jpeg',
						text:"史蒂夫大教堂里的瞬间",},
						
					],
					
				},
			],
				selectData:[
					{id:1,name:'家居生活'},
					{id:2,name:'摄影设计'},
					{id:3,name:'明星美女'},
					{id:4,name:'空间设计'},
					{id:5,name:'户型装饰'},
					{id:6,name:'广告摄影'},
					{id:7,name:'摄影学习'},
					{id:8,name:'摄影器材'},
					{id:9,name:'户外旅行'},
					{id:10,name:'散文随笔'},
					{id:11,name:'少儿英语'},
					{id:12,name:'艺术生品'},
					{id:13,name:'社会科学'},
					{id:14,name:'励志成功'},
					{id:15,name:'建筑艺术'},
					{id:16,name:'音乐艺术'},
					{id:17,name:'编程艺术'},
					]
			}
		},
		onLoad(){
			this.handleClickLeft(0);
		},
		methods: {
			handleClickLeft(index){
				this.active=index;
				
				if(! this.textData[index]) return this.selectImg=[];
				this.selectImg=this.textData[index].data;
			},
			 // 预览图片
			handelPreviewImg(current){
				var imgs=this.selectImg.map(item=>{
					return item.url;
				})
				uni.previewImage({
					current:current,
					 urls: imgs,
				});       
			},
			
		}
	}
</script>

<style lang="scss">
	page{
	height: 100%;	
	}
	.pics-container{
		display: flex;
		height: 100%;
		.pics-left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			margin-right: 15rpx;
			view{
				height: 80rpx;
				border-top: 1px solid #eee;
				text-align: center;
				line-height: 80rpx;
				font-size: 30rpx;
				color: #333;
			}
			view.active{
				color: #fff;
				background-color: $shop-text;
			}
		}
		.pics-right{
			flex: 1;
			height: 100%;
			padding-right: 15rpx;
			box-sizing: border-box;
			padding-bottom: 40rpx;
			view{
				margin-top: 40rpx;
			}
			image{
				width: 100%;
				height: 500rpx;
				border-radius: 10px;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		
		    .nodata{
				font-size: 30rpx;
				text-align: center;
				margin-top: 100px;
			}
		}
		
	}
</style>
