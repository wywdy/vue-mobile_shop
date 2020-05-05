import {request} from "./request";

export function getDetail(id) {
     return request({
         url:'/api/shopdetail',
         params:{
             sid:id
         }
     })
}

export class GoodsObj {
       constructor(obj){
           this.id=obj.id
           this.imgurl=obj.imgurl
           this.title=obj.title
           this.price=obj.price
           this.count=1
           this.isCheck=false
       }
}