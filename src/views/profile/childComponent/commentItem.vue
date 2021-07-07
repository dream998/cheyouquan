<template>
	<div>
		<div class="left" :class="{'haveImg':msg.img}">
			<div id="comment-item">

				<div class="icon">
					<img :src="msg.personIcon" alt="" />
				</div>
				<div class="name-text-time">
					<div class="name">{{ msg.username }}</div>
					<div class="text">
						{{ msg.text }}
					</div>
					<div class="time">
						{{msg.time}}
						<img src="~assets/imgs/Group 25@2x.png" alt="" @click="deleteItem">
					</div>
				</div>
			</div>

		</div>
		<div class="right" v-if="msg.img">
			<img :src="msg.img" alt="" width="70px" height="70px">
		</div>
	</div>

</template>

<script>
	import {
		Dialog
	} from 'vant';

	export default {
		name: "commentItem",
		props: {
			msg: {
				type: Object,
				default () {
					return {};
				},
			},
		},
		methods: {
			deleteItem() {

				Dialog.confirm({
						title: "确认删除",
						message: '确认删除该条内容吗？',
					})
					.then(() => {
						// on confirm
						this.$emit("deleteItem")
					})
					.catch(() => {
						// on cancel
					});
			}
		}
	};
</script>

<style scoped>
	.left {
		float: left;
	
	}
	.haveImg{
		width: calc(100% - 80px);
	}
	.right {
		float: right;
		margin-top: 50px;
		margin-right: 10px;
		width: 70px;
		height: 70px;
	}

	#comment-item {
		display: flex;
		box-sizing: border-box;
		padding: 30px 18px;
		background: #fff;
		margin-top: 20px;

	}

	#comment-item .icon img {
		width: 34px;
		height: 34px;
		border-radius: 50%;
	}

	#comment-item .name-text-time {
		text-align: left;
		margin-left: 20px;
	}

	#comment-item .name-text-time .name {
		margin-bottom: 12px;

		font-family: PingFang-SC-Bold;
		font-size: 14px;
		color: #222222;
		letter-spacing: 0;
		line-height: 14px;
		font-weight: 700;
	}

	#comment-item .name-text-time .text {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		
		font-weight: 400;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #222222;
		letter-spacing: 0;
		line-height: 16px;
		font-weight: 400;
	}

	/* #comment-item .name-text-time .text img {
    width: 13.27px;
    height: 13.27px;
} */

	#comment-item .name-text-time .time {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 12px;
		font-weight: 400;
		margin-top: 12px;
	}

	#comment-item .name-text-time .time img {
		vertical-align: bottom;
		margin-left: 5px;
		width: 12px;
		height: 12px;
	}
</style>
