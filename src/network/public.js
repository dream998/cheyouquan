import request from './request_z.js'

export function uploadMessage(text,imgs){

	let params = {
		username:'wu',
		type:1,
		circleID:'1',
		text:text,
		img:[]
	}
	
	
	for(let i = 0; i<imgs.length;i++){
		
		params.img.push(imgs[i].content)
	}
	console.log(params);
	return request.post('api/client/user/publish',params)
}
