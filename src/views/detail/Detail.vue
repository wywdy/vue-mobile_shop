<template>
    <div class="detail">
        <van-nav-bar
                title="商品详情"
                left-arrow
                left-text="返回"
                @click-left="onClickLeft"
        />
<!--        <p>{{ $route.query.id }}</p>-->
<!--        对应path:'/detail'-->

     <!--   <h1>{{ $route.params.sid }}</h1>-->
<!--        对应path:'/detail' -->

        <div class="imginfo">
            <img :src=x+shop[0].imgurl alt="">
        </div>
        <div class="name">
            <span>{{ shop[0].title }}</span>
        </div>
        <div class="name">
            <span>价格：￥{{ shop[0].price }}</span>
        </div>
        <params></params>
        <div class="tj">
            <h3>店铺推荐</h3>
            <div v-for="item in tjArr">
                <img :src="item" alt="">
            </div>
        </div>

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" text="加入购物车" @click="tj" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
   import {getDetail,GoodsObj} from "../../ntework/detail";
   import params from './children/Params'
   export default {
        name: "Detail",
        data(){
            return {
                shop:[{
                    imgurl:"",
                    id:0,
                    title:"",
                    price:0
                }],
               x:"/api",
                tjArr:[
                    require('./../../assets/common/img/tj/t1.jpg'),
                    require('./../../assets/common/img/tj/t2.jpg'),
                    require('./../../assets/common/img/tj/t3.jpg'),
                    require('./../../assets/common/img/tj/t4.jpg'),
                    require('./../../assets/common/img/tj/t5.jpg'),
                    require('./../../assets/common/img/tj/t6.jpg'),
                ]
            }
        },
        methods:{
            shopDetail(id){
                getDetail(id).then(res=>{
                   // console.log(res.data);
                    this.shop=res.data

                }).catch(err=>{
                    console.log(err);
                })
            },
            onClickLeft(){
                this.$router.back()
            },
            tj(){
               // console.log(this.shop[0]);
                let g=new GoodsObj(this.shop[0])
              //  console.log(g);
                this.$store.commit('addCartList',g)
                this.$toast1.show("已添加购物车",2000)
            }
        },
       components:{
            params
       },
        created() {
            this.id=parseInt(this.$route.params.sid)
           // console.log(this.id);
            this.shopDetail(this.id)
        }
    }
</script>

<style scoped lang="less">
    .van-nav-bar{
        background: rgba(255, 127, 80, 0.75);
    }
  .title{
      font-size: 26px;
      color: rgba(255, 0, 0, 0.76);
      padding-top: 5px;
  }
    .imginfo{
        /*margin-top: 10px;*/
        width: 100vw;
        height: 400px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .name{
        font-size: 24px;
        color: coral;
        span{
            display: inline-block;
            padding-top: 20px;
        }
    }
    .tj{
        margin-top: 20px;
        h3{
            padding: 20px 0;
            border-top: 3px solid #cccccc;
        }
        width: 100%;
        height: 150px;
        div{
            margin-top: 5px;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>