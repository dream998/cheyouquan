<template>
	<div id="detail-bottom">
		<input type="text" :placeholder="placeholder" ref="commentInput" />
		<span @click="publishComment">发布</span>
	</div>
</template>

<script>
	export default {
		name: "DetailBottom",
		props: {
			username: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				currentUsername: ''
			}
		},
		watch: {
			username(val) {
				this.currentUsername = val
			}
		},

		computed: {
			placeholder: {
				get() {
					if (!this.currentUsername) {
						return '说点什么吧'
					} else {
						return '@' + this.currentUsername
					}
				},
				set() {

				}
			},


		},
		methods: {
			publishComment() {
				//console.log("你点击了发布");
				console.log(this.$refs.commentInput.value);
				this.$emit('publishComment', this.$refs.commentInput.value)
				console.log(this.currentUsername);
				
				this.currentUsername = ''
				console.log(this.currentUsername);
				this.$refs.commentInput.value = ''
			}
		}

	};
</script>

<style scoped>
	#detail-bottom {
		position: fixed;
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		width: 375px;
		height: 48px;
		background-color: white;
	}

	#detail-bottom input {
		box-sizing: border-box;
		margin: 8px 16px;
		width: 295px;
		height: 32px;
		background: #f4f5f6;
		border: 0 solid #e6e6e6;
		border-radius: 16px;

		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #999999;
		letter-spacing: 0;
		text-align: left;
		line-height: 14px;
		font-weight: 400;
		padding-left: 12px;
	}

	#detail-bottom span {
		font-family: PingFangSC-Medium;
		font-size: 16px;
		color: #3296fa;
		letter-spacing: 0;
		text-align: left;
		line-height: 16px;
		font-weight: 500;
		margin-right: 16px;
	}
</style>
