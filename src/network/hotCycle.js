import {request} from './request'

export function getHotCycle() {
    return request({
        url: 'HotCycle'
    })
}

// 调用后端接口
// import request from "network/request_z.js";

// export function getHotCycle() {
//     return request
//     .get("api/circle/hot")
// }