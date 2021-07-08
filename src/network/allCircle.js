import request from './request_z.js'

export function getAllCircle(){
	return request.get('api/circle/allcircle')
} 