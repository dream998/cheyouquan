<template>
	<div class="answer-item">
		<div class="main-item">
			<div class="user-icon">
				<img :src="answerData.personIcon" alt="">
			</div>
			<div class="content">
				<div class="username">{{answerData.username}}</div>
				
				<div class="timeAndReply">
					<span class="comment-time">{{answerData.time}}</span>
					
				</div>
			</div>
			
		</div>
		<div class="comment-text">{{answerData.text}}</div>
	</div>
</template>

<script>
	export default{
		props:{
			answerData:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style scoped="scoped">
	.answer-item{
		margin-top: 20px;
		padding-bottom: 10px;
		border-bottom: solid 1px #f4f4f4;
	}
	.main-item::after{
		content: "";
		display: block;
		clear: both;
	}

	.user-icon{
		float: left;
		margin-left: 15px;
	}
	.user-icon img{
		width: 36px;
		height: 36px;
		border-radius: 50%;
		
	}
	.content{
		float: left;
		margin-left: 10px;
		width: 300px;
	}
	.content::after{
		content: "";
		display: block;
		clear: both;
	}
	.username{
		font-family: PingFang-SC-Bold;
		font-size: 14px;
		color: #333333;
		line-height: 14px;
		font-weight: 700;
		margin-bottom: 5px;
	}
	.comment-text{
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #000000;
		letter-spacing: 0;
		font-weight: 500;
		margin-left: 20px;
	}
	.timeAndReply{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 16px;
		font-weight: 400;
	}
</style>
