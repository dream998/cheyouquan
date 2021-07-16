<template>
	<div id="app">
		
		<keep-alive exclude="Publish"><router-view /></keep-alive>	
		
		
	</div>
</template>


<style lang="less">

   
	* {
		padding: 0;
		margin: 0;
	}
	

	@font-face {
		font-family: 'PingFang-SC-Medium';
		src: url('./assets/PingFang/PingFang-SC-Medium.ttf');

	}
	
	@font-face {
		font-family: 'PingFang-SC-Regular';
		src: url('./assets/PingFang/PingFang-Regular.ttf');
	
	}

	html,
	body {
		font-family: PingFang-SC-Medium, sans-serif;
	}
</style>
