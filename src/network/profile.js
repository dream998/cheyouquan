// import {request} from './request'

// export function getUserMessage() {
//     return request({
//         url: 'Profile'
//     })
// }


import request from "network/request_z.js";

export function getUserMessage() {
    return request
        .get("api/user/message", {
            params: {
                username: "wu",
            },
        })
    // .then(
    //   (res) => {
    //     console.log("success");
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
}
