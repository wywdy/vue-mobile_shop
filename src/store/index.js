import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //用户购物车列表
    cartList:[
       /* {
            "id": 6,
            "imgurl": "/goods/a6.jpg",
            "title": "2019秋季新品男装6",
            "price": "66.6",
             'count':1,
              'isCheck':false
        },
        {
            "id": 7,
            "imgurl": "/goods/a7.jpg",
            "title": "2019秋季新品男装7",
            "price": "123",
            'count':1,
            'isCheck':false
        },
        {
            "id": 8,
            "imgurl": "/goods/a8.jpg",
            "title": "2019秋季新品男装8",
            "price": "99.8",
            'count':1,
            'isCheck':false
        },*/
    ],
      //用户信息
      userInfo:{},
  },
  mutations: {
   addCartList(state,payload) {
       //  console.log(payload);
      for(let i of state.cartList){
          if(i.id==payload.id){
              return
          }
      }
       // 如果商品还没有添加，则将商品添加到 cartList 数组中;
     //  console.log(1)
       state.cartList.push(payload)
         //console.log("添加成功")
   },
      addCount1(state,id){
       state.cartList.forEach((v)=>{
            if(v.id==id){
                v.count+=1
            }
        })
      },
      addCount2(state,id){
          state.cartList.forEach((v)=>{
              if(v.id==id){
                  if(v.count==1){
                      return
                  }
                  v.count-=1
              }
          })
      },
      del(state,id){
                let index=0
           state.cartList.forEach((v,i)=>{
               if(v.id==id){
                   index=i
               }
           })
          state.cartList.splice(index,1)
      }
  },
  actions: {
  },
  modules: {
  }
})
