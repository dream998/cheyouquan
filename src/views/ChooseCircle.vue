<template>
	<div>
		
		<top-bar title='选择车圈' @goBefore="goBefore()"></top-bar>
		
		<div class="content">
			<div class="circle-item" v-for="item in circleData" @click="returnPublic(item.circleID,item.name)">
				<div class="icon">
					<img :src='item.circleIcon' alt="">
				</div>
				<div class="text">
					<div class="title">{{item.name}}</div>

					<div class="details">
						{{item.joinNUms}}人加入 {{item.contentNums}}条内容
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	import TopBar from 'components/TopBar.vue'
	import {getAllCircle} from 'network/allCircle.js'
	export default {
		components: {
			TopBar
		},
		data() {
			return {
				circleData: [{
						"creator": null,
						"creatorIcon": null,
						"name": "特斯拉",
						"joinNUms": 4,
						"contentNums": 123,
						"circleIcon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161109%2Fd12963393d9d48248d5391a772aac75e_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628048482&t=3f195dfd6b327da5580fa04c19f527ad",
						"introduction": null,
						"perconIcons": null,
						"circleID": '12341'
					},
					{
						"creator": null,
						"creatorIcon": null,
						"name": "特斯拉",
						"joinNUms": 3,
						"contentNums": 2,
						"circleIcon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161109%2Fd12963393d9d48248d5391a772aac75e_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628048482&t=3f195dfd6b327da5580fa04c19f527ad",
						"introduction": null,
						"perconIcons": null,
						"circleID": '12341'
					},
					{
						"creator": null,
						"creatorIcon": null,
						"name": "特斯拉",
						"joinNUms": 1,
						"contentNums": 0,
						"circleIcon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161109%2Fd12963393d9d48248d5391a772aac75e_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628048482&t=3f195dfd6b327da5580fa04c19f527ad",
						"introduction": null,
						"perconIcons": null,
						"circleID": '12341'
					}
				]
			}
		},
		methods: {
			returnPublic(circleID, name) {
				this.$router.replace({
					name: 'Publish',
					params: {
						circleID: circleID,
						name: name
					}
				})
			},
			goBefore(){
				console.log("你点击了后退");
				this.$router.back()
			}
		},
		created() {
			getAllCircle().then(res=>{
				this.circleData = res.data
			})
		}
	}
</script>

<style scoped="scoped">
	
	.content {
		margin-left: 20px;
		margin-top: 20px;

	}

	.circle-item {
		margin-top: 20px;
	}

	.circle-item::after {
		content: '';
		display: block;
		clear: both;
	}

	.icon {
		float: left;

	}

	.icon img {
		height: 66px;
		width: 100px;
	}

	.text {
		float: left;
		margin-left: 10px;
		margin-top: 11.5px;
	}

	.text .title {
		font-size: 16px;
		color: #1A1A1A;
		letter-spacing: 0;
		margin-bottom: 5px;
	}

	.text .details {
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 18px;
		font-weight: 400;
	}
</style>
