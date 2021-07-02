import {request} from './request'

export function getUserMessage() {
    return request({
        url: 'Profile'
    })
}