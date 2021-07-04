<template>

	<div id="publish">
		<top-bar title='发布'></top-bar>
		<div id="content" ref='content'>
			<div class='text'>

				<van-field v-model="message" rows="7" type="textarea" maxlength="2000" placeholder="分享汽车生活!" />
			</div>
			<van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="9"
				:preview-size='previewSize' />
		</div>



		<div class="select">
			<button class="choose-circle">
				<div class='big'>
					<div class='small'></div>
				</div>
				选择车圈 >
			</button>
			<div class="num">{{message.length}}/2000</div>
			<div class='fabu' @click="upload">发布</div>
		</div>
	</div>
</template>

<script>
	import TopBar from 'components/TopBar.vue'
	import {
		uploadMessage
	} from 'network/public.js'
	import request from 'network/request_z.js'
	export default {

		components: {
			TopBar
		},

		name: 'Publish',
		data() {
			return {
				fileList: [],
				message: '',
				previewSize: 0

			}
		},
		computed: {

		},
		methods: {

			upload() {
				console.log("上传图片");
				console.log(this.message);
				request.get('api/user/dynamic', {
									params: {
										username: 'wu',
									}
								}).then(res => {
									console.log('success');
									console.log(res);
								}, err => {
									console.log(err);
								})
				//uploadMessage(this.message,this.fileList).then(res=>{console.log(res);})
			},
			inputClick() {
				//让input框自动聚焦就可以让手机自动调出软键盘
				var input = document.querySelector('input');
				input.focus();
			},

			afterRead(file) {
				// 此时可以自行将文件上传至服务器
				console.log(file.file);
				console.log(this.fileList);
			},

		},
		mounted() {
			this.previewSize = (this.$refs.content.clientWidth - 26) / 3;
		}
	};
</script>

<style scoped>
	#content {
		margin-top: 10px;
		margin-left: 10px;
		font-family: PingFang-SC-Medium;

	}

	#content .van-cell {
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		font-weight: 400;
	}


	.select {
		display: flex;
		margin-top: 100px;
		font-size: 16px;
		color: #333333;
		letter-spacing: 0;
		font-weight: 500;
		position: absolute;
		bottom: 0px;
		left: 5px;
		right: 10px;
		padding-bottom: 10px;
		background-color: white;

	}

	.select button {
		float: left;
		display: flex;
		height: 30px;
		width: 40%;
		text-align: center;
		/* color: #333333; */
		border: none;
		outline: 0;
		background-color: #fff;

	}

	.choose-circle {
		margin-top: 2px;
	}

	.big {
		width: 12px;
		height: 12px;
		border: 1px solid black;
		border-radius: 50%;
		margin: 3px 10px;
	}

	.small {
		width: 5px;
		height: 5px;
		border: 1px solid #fff;
		border-radius: 50%;
		background-color: #333333;
		margin: 2px auto;
	}

	.select .num {

		margin-left: 80px;
		font-size: 12px;
		color: #999999;
		text-align: right;
		margin-top: 8px;
		font-weight: 400;

	}

	.select .fabu {
		width: 64px;
		height: 28px;
		background-color: #FFE100;
		text-align: center;
		line-height: 28px;
		border-radius: 14px;
		margin-left: 20px;
		color: #333333;
		font-size: 14px;
	}
</style>

