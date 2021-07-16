import request from './request_z.js'

export function uploadMessage(text,imgs,circleID,type){

	let params = {
		username:window.localStorage.getItem('username'),
		type:type,
		circleID:circleID,
		text:text,
		img:[]
	}
	
	
	for(let i = 0; i<imgs.length;i++){
		
		params.img.push(imgs[i].content)
	}
	console.log(params);
	console.log(params.img);
	return request.post('api/client/user/publish',params)
}


