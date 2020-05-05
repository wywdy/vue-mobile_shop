<template>
    <div class="my">
        <div class="header">
            <div class="title">我的信息</div>
            <div class="info">
                <img :src=imgArr[0]>
                <div class="center">
                    <p class="login" @click="loginRes">登录/注册</p>
                    <p class="iphone"><van-icon name="graphic" />暂无绑定的手机号</p>
                </div>
                <div class="i">
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
        <div class="detail">
            <div>
                <p><span>0.00</span>&nbsp;元</p>
                <p>我的余额</p>
            </div>
            <div class="center">
                <p><span>0</span>&nbsp;个</p>
                <p>我的优惠</p>
            </div>
            <div>
                <p><span>0</span>&nbsp;分</p>
                <p>我的积分</p>
            </div>
        </div>
        <div class="news">
            <div>
                <img :src=imgArr[1]>
                <span>我的消息</span>
            </div>
            <div class="shop">
                <img :src=imgArr[2]>
                <p>我的商城</p>
            </div>
            <div>
                <img :src=imgArr[3]>
                <p>会员卡</p>
            </div>
        </div>
        <div class="cart">
            <div>
                <img :src=imgArr[4]>
                <span>我的购物车</span>
            </div>
            <div>
                <img :src=imgArr[5]>
                <p class="app">下载购物APP</p>
            </div>
        </div>
        <tabFooter></tabFooter>
    </div>
</template>

<script>
    import tabFooter from '@/components/com/TabFooter.vue'
    export default {
        name: "Profile",
        data(){
            return {
               imgArr:[
                   require("@/assets/common/img/presoncenter/avatar.svg"),
                   require('@/assets/common/img/presoncenter/message.svg'),
                   require("@/assets/common/img/presoncenter/pointer.svg"),
                   require("@/assets/common/img/presoncenter/vip.svg"),
                   require("@/assets/common/img/presoncenter/cart.svg"),
                   require("@/assets/common/img/presoncenter/shopping.svg")
               ]
            }
        },
        methods:{
            loginRes(){
                this.$router.push('/login')
            },
        },
        components:{
            tabFooter
        }
    }
</script>

<style scoped lang="less">
    .my{
        font-size: 1.2rem;
        .header{
            padding: 0.2rem 0.2rem 0.4rem 0.2rem;
            height: 3rem;
            background-color: #FF8E96;
            .title{
                color: white;
                font-size: 0.4rem;
                width: 1.6rem;
                line-height: 0.66rem;
                margin: 0 auto;
                text-align: center;

            }
            .info{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content:space-between;
                color: white;
                margin-top: 0.1rem;
                img{
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .center{
                    margin-left: -1rem;
                    .login{
                        font-size: 0.4rem;
                    }
                    .iphone{
                        display: flex;
                        align-items: center;
                        font-size: 0.32rem;
                        margin-top: 0.3rem;
                    }
                }
                .i{
                    font-size: 0.5rem;
                    /*margin-right: 5px;*/
                }
            }
        }
        .detail{
            display: flex;
            height: 1.8rem;
            border-bottom: 0.12rem solid #F2F2F2;
            .center{
                border-left: 1px solid #FAFAFA;
                border-right: 1px solid #FAFAFA;
            }
            div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;
                font-size: 0.4rem;
                p{
                    span{
                        color: #E67962;
                        font-weight: bold;
                    }
                }
            }
        }
        .news{
            display: flex;
            flex-direction: column;
            height: 3.2rem;
            padding: 0 0.3rem;
            border-bottom: 0.12rem solid #F2F2F2;
            .shop{
                p{
                    display: flex;
                    align-items: center;
                    width: calc(100% - 0.6rem);
                    height: 100%;
                    border-top: 1px solid #f2f2f2;
                    border-bottom: 1px solid #f2f2f2;
                }
            }
            div{
                flex: 1;
                display: flex;
                align-items: center;
                font-size: 0.4rem;
                img{
                    margin-right: 0.2rem;
                    width: 0.6rem;
                    height: 0.6rem;
                }
            }
        }
        .cart{
            padding: 0 0.3rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            height: 2.1rem;
            div{
                flex: 1;
                display: flex;
                align-items: center;
                font-size: 0.4rem;
                img{
                    width: 0.6rem;
                    height: 0.6rem;
                }
                span{
                    margin-left: 8px;
                }
                .app{
                    display: flex;
                    align-items: center;
                    width: calc(100% - 0.6rem);
                    height: 100%;
                    margin-left: 8px;
                    border-top: 1px solid #f2f2f2;
                }
            }
        }
    }
</style>