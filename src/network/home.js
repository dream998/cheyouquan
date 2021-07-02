import {request} from './request'

export function getHomeGoods() {
    return request({
        url: 'Home_messageFlow',
        // params: {
        //     page
        // }
    })
}