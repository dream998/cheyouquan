<template>
	<div class="parent">

		<top-bar title="车友圈" @goBefore="goBefore"></top-bar>


		<div class="circle-card">
			<div class="left">
				<div class="title">{{circleCardMsg.name}}</div>
				<div class="people">
					<span class="master">
						<span>圈主：</span>
						<img src="../assets/imgs/Mask@2x.png" alt="">
					</span>

					<span class="members">
						<img v-for="item in circleCardMsg.perconIcons" :src="item" alt="">
						
						等{{circleCardMsg.count}}个车友
					</span>

				</div>
				<div class="introduction">北京地区A4车友俱乐部，奥法施工1大国违法啊大噶的各位断法的撒法施工岸上观光阿达秉承“秉承“快</div>
			</div>
			<div class="right">
				<img src="../assets/imgs/tesila.png" alt="">
			</div>
		</div>
		
		<van-sticky :offset-top="45">
			<tab-control :titles="['热门','最新']" class="tab-control" @tabClick="tabClick" ref='tabControl2'></tab-control>
		</van-sticky>
		<div class="content">
			<MessageFlow :msg="message" />
		</div>
	</div>


</template>

<script>
	import TopBar from '../components/TopBar.vue'
	import TabControl from '../components/TabControl.vue'
	import MessageFlow from 'views/home/childComponent/MessageFlow.vue'
	import {
		getHomeGoods
	} from "network/home";
	export default {
		name:'Circle',
		components: {
			TopBar,
			TabControl,
			MessageFlow
		},
		data() {
			return {
				message: [],
				circleCardMsg:{}

			}
		},
		methods: {
			tabClick() {
				console.log("点击了");
			},
			goBefore(){
				this.$router.back()
			}
		},
		created() {
			console.log(this.$route);
			this.circleCardMsg = this.$route.params.msg
			getHomeGoods().then((res) => {
				this.message = res.data.data;
			});
		},
	}
</script>

<style scoped="scoped">
	.parent {
		background: #F4F5F6;
	}

	.circle-card {
		padding-left: 10px;
		padding-top: 20px;
		height: 90px;
		width: 365px;
		background-color: white;
		overflow-y: hidden;
		
	}
	.circle-card::after{
		content: "";
		clear: both;
		display: block;
	}
	.circle-card .left {
		float: left;
		width: calc(100% - 130px);
	}

	.circle-card .right {
		float: right;
		opacity: 0.3;
		width: 130px;
	}

	.title {
		font-family: PingFang-SC-Medium;
		font-size: 20px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
		font-weight: 500;
	}

	.introduction {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #333333;
		letter-spacing: 0;
		line-height: 12px;
		font-weight: 400;
		margin-top: 5px;
		display: block;
		
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.people {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #333333;
		letter-spacing: 0;
		line-height: 12px;
		font-weight: 400;
		margin-top: 5px;
	}

	.members img {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		margin-left: -5px;

	}

	.master img {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		margin-right: 20px;
	}
	.tab-control{
		margin-top: 5px;
		margin-bottom: 5px;
	}
	.content{
		background-color: white;
		padding-top: 5px;
	}
</style>
