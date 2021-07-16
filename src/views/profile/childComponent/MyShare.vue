<template>


	<div>
		<top-bar title="我的动态" @goBefore='goBefore'></top-bar>
		<div class="content">
			<div class="dynamicItem">
				<my-comment-item v-for='item in message.data' :msg='item' @deleteItem="deleteItem"></my-comment-item>
				
			</div>
		</div>
	</div>


</template>

<script>
	import TopBar from 'components/TopBar.vue'
	import MyCommentItem from './commentItem.vue'
	import {
		getMyComment
	} from 'network/MyComment.js'
	export default {
		components: {
			TopBar,
			MyCommentItem
		},
		data() {
			return {
				message: {
					"state": 0,
					"data": [{
							"dynamicId": null, //这是方便返回数据带的id,不需要处理，所以返null
							"type": 0,
							"text": "宝马三系去哪里买比较好宝马三系去哪里买比较好宝马三系去哪里买比较好宝马三系去哪里买比较好宝马三系去哪里买比较好宝马三系去哪里买比较好宝马三系去哪里买比较好宝马三系去哪里买比较好宝马三系去哪里买比较好",
							"img": "https://img0.baidu.com/it/u=1530449736,2179441749&fm=26&fmt=auto&gp=0.jpg",
							"commentNums": 123,
							"time": "2021-06-18",
							"likesNums": 0, //这是方便返回数据带,不需要处理，所以为0
							"username": "张大仙", //这是方便返回数据,不需要处理，所以返null
							"personIcon": null //这是方便返回数据,不需要处理，所以返null
						},
						{
							"dynamicId": "e3de3c8b59d74ab7bf337bce5b4a8d8e",
							"type": 1,
							"text": "10万以内推荐买什么车？10万以内推荐买什么车？10万以内推荐买什么车？10万以内推荐买什么车？10万以内推荐买什么车？",
							"commentNums": 123,
							"time": "2021-06-18",
							"likesNums": 0,
							"username": "张大仙",
							"personIcon": null
						}
					]
				}
			}
		},
		methods: {
			goBefore() {
				console.log("你点击了后退");
				this.$router.back()
			},
			deleteItem(dynamicId){
				for (let s in this.message.data) {
					console.log(s);
					if(this.message.data[s].dynamicId==dynamicId){
						this.message.data.splice(s,1)
					}
				}
				
			}

		},
		created() {
			getMyComment().then(res => {
				//  this.message = res.data.data
				//this.message = res.data
				console.log(res.data);
			})
		},
	}
</script>

<style>
</style>
