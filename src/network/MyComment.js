import {request} from './request'

export function getMyComment() {
    return request({
        url: 'Home_messageFlow',
    })
}