<template>
	<div class="comment-item">
		<div class="main-item">
			<div class="user-icon">
				<img :src="commentItemData.mainData.personIcon" alt="">
			</div>
			<div class="content">
				<div class="username">{{commentItemData.mainData.username}}</div>
				<div class="comment-text">{{commentItemData.mainData.text}}</div>
				<div class="timeAndReply">
					<span class="comment-time">{{commentItemData.mainData.time}}</span>
					<button class="reply">回复</button>
				</div>
			</div>
		</div>
		<div class="addition">
			<div class="addition-item" v-for="item in commentItemData.additionData">
				<span class="username">{{item.username}}: </span>
				<span class="comment-text">{{item.text}}</span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		props:{
			commentItemData:{
				type:Object,
				default:{}
			}
		}
	}
</script>

<style scoped="scoped">
	.comment-item{
		margin-bottom: 30px;
	}
	.main-item::after{
		content: "";
		display: block;
		clear: both;
	}
	.addition{
		margin-left: 60px;
		border-left: solid 3px  #E6E6E6;
	}
	.addition-item{
		
		line-height: 20px;
		
		padding-left: 5px;
		margin-bottom: 5px;
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
		/* 超出行数隐藏内容 */
		/* -webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow : hidden; */ 
	}
	.timeAndReply{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
		letter-spacing: 0;
		line-height: 16px;
		font-weight: 400;
	}
	.reply{
		margin-left: 20px;
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #333333;
		letter-spacing: 0;
		line-height: 16px;
		font-weight: 400;
		border-radius: 10px;
		border: none;
		padding: 3px 10px;
	}
</style>
