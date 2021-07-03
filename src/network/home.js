import {request} from 'network/request.js'

export function getHomeGoods() {
    return request({
        url: 'Home_messageFlow',
        // params: {
        //     page
        // }
    })
}