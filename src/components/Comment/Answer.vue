<template>
	<div class="answer">
		<answer-item v-for="item in answers" :answerData="item"></answer-item>
	</div>
</template>

<script>
	import AnswerItem from './AnswerItem.vue'
	export default {
		components: {
			AnswerItem
		},
		data() {
			return {
				answers: [{
						"username": "奥特曼打小鬼",
						"dynamicID": "呼啦呼啦20211181332",
						"personIcon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F15%2F20160115232537_FYdvP.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628344107&t=5f894a3ef22e2f7be43a216df173ea75",
						"text": "这辆车太好看了！",
						"time": "2021-06-18 13:32",
						"answerID": "奥特曼打小鬼202106181332",
						"selected": true //是否精选，true表示是精选答案

					},
					{
						"username": "奥特曼打小鬼",
						"dynamicID": "呼啦呼啦20211181332",
						"personIcon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F15%2F20160115232537_FYdvP.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628344107&t=5f894a3ef22e2f7be43a216df173ea75",
						"text": "这辆车太好看了！这辆车太好看了！这辆车太好看了！这辆车太好看了！这辆车太好看了！这辆车太好看了！这辆车太好看了！这辆车太好看了！这辆车太好看了！",
						"time": "2021-06-18 13:32",
						"commentID": "奥特曼打小鬼202106181332",
						"selected": false //是否精选

					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	
</style>
