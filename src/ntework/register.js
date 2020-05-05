import {request} from "./request";

export function getregister(obj) {
    return request({
        url:"/api/login/register",
        params:obj
    })
}