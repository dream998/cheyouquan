<template>

	<div id="publish">
		
		<top-bar title='发布' @goBefore='goBefore'></top-bar>
		
		<div id="content" ref='content'>
			<div class='text'>

				<van-field v-model="message" rows="7" type="textarea" maxlength="2000" placeholder="分享汽车生活!" />
			</div>
			<van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="9"
				:preview-size='previewSize' />
		</div>



		<div class="select">
			<button class="choose-circle" @click="chooseCircle">
				<div class='big'>
					<div class='small'></div>
				</div>
				<span v-if="circleName">{{circleName}} ></span>
				<span v-else>选择车圈 ></span>
				
			</button>
			<div class="num">{{message.length}}/2000</div>
			<div class='fabu' @click="upload">发布</div>
		</div>
		
		<van-action-sheet
		  v-model="show"
		  :actions="actions"
		  cancel-text="取消"
		  close-on-click-action
		  @cancel="onCancel"
		  @select="onSelect"
		/>
	</div>
	
</template>

<script>
	import {Toast} from 'vant'
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
				previewSize: 0,
				circleID:'',
				circleName:'',
				show: false,
				actions: [{ name: '保存草稿' }, { name: '丢弃' }],
				type:1
				

			}
		},
		computed: {

		},
		methods: {
			//发表图文
			upload() {
				console.log("上传图片");
				console.log(this.message);
				
				console.log("车圈ID是"+this.$route.params.circleID);
				//this.circleID = this.$route.params.circleID;
				if( !this.message){
					Toast("请输入内容！")
				}
				else if( !this.circleID){
					Toast("您还没有选择车圈！")
				}
				else{
					uploadMessage(this.message,this.fileList,this.circleID,this.type).then(res=>{console.log(res);})
				}
				
			},
			 onCancel() {
			      Toast('取消');
			    },
				
			 onSelect(item) {
			      // 默认情况下点击选项时不会自动收起
			      // 可以通过 close-on-click-action 属性开启自动收起
			      //this.show = false;
				  console.log(item);
			      //Toast(item.name);
				  if(item.name == '保存草稿'){
					 this.setLocalStorage()
				  }
				  if(item.name == '丢弃'){
					  this.removeLocalStorage()
				  }
				  
				this.$router.replace('/home')
				  
			    },
			//点击返回按钮
			goBefore(){
				console.log("点击了返回");
				this.show = true
				
			},
			setLocalStorage(){
				if(this.message){
					window.localStorage.setItem('text',this.message);
				}
				if(this.fileList){
					window.localStorage.setItem('imgs',JSON.stringify(this.fileList))
				}
				if(this.circleName){
					window.localStorage.setItem('circleName',this.circleName)
				}
				if(this.circleID){
					window.localStorage.setItem('circleID',this.circleID);
				}
				
				
			},
			getLocalStorage(){
				if(window.localStorage.getItem('circleName')){
					this.circleName = window.localStorage.getItem('circleName')
				}
				if(window.localStorage.getItem('circleID')){
					this.circleID = window.localStorage.getItem('circleID')
				}
				if(window.localStorage.getItem('text')){
					this.message = window.localStorage.getItem('text')
				}
				if(window.localStorage.getItem('imgs')){
					this.fileList = JSON.parse(window.localStorage.getItem('imgs'))
				}
				
				
				
				 
			},
			removeLocalStorage(){
				window.localStorage.removeItem('text');
				window.localStorage.removeItem('imgs')
				window.localStorage.removeItem('circleName')
				window.localStorage.removeItem('circleID');
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
			chooseCircle(){
				this.setLocalStorage()
				 this.$router.push('/choosecircle');
			}

		},
		
		mounted() {
			this.previewSize = (this.$refs.content.clientWidth - 26) / 3;
		},
		created(){
			console.log("组件创建了");
			//如果路由跳转携带参数则更新车圈名和车圈ID
			this.getLocalStorage()
			
			if(this.$route.params){
				this.circleName = this.$route.params.name;
				this.circleID = this.$route.params.circleID
				this.type = this.$route.params.type;
				
			}
				
				
			
			
		},
		destroyed() {
			console.log(this.$route.name);
			if(this.$route.name == 'circle'){
				this.setLocalStorage()
			}
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
		
		text-align: center;
		/* color: #333333; */
		border: none;
		outline: 0;
		background-color: #fff;

	}

	.choose-circle {
		margin-top: 2px;
		width: 200px;
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

