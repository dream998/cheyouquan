// import { request } from './request'

// export function getMyComment() {
//     return request({
//         url: 'Home_messageFlow',
//     })
// }

import request from "network/request_z.js";

export function getMyComment() {
    return        request
    .get("api/user/selectcomment", {
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
