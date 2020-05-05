import {request} from "./request";

export function getCode() {
    return request({
        url:"/api/login/getsms",
    })
}

export function dxlogin(obj) {
    return request({
        url:"/api/login/dxdl",
        method: "post",
        data:obj
    })
}

export function zhlogin(obj) {
      return request({
          url:"/api/login/zhdl",
          method:"post",
          data:obj
      })
}

