import {request} from "./request";

export function getBanner() {
    return request({
        url:"/api/home/casual"
    })
}

export function getRecommend() {
    return request({
        url:"/api/home/recommend"
    })
}

export function getGoods(type,page) {
    return request({
        url:"/api/home.goods",
        params:{
            type,
            page
        }
    })
}