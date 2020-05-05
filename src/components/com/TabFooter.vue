<template>
       <div class="bottom-tab">
           <div class="tab-item" @click="switchTo('home')" :class="{on:'/home'===$route.path}">
               <img :src="'/home'===$route.path?imgArr[0].act:imgArr[0].normal" alt="">
               <span >首页</span>
           </div>
           <div class="tab-item" @click="switchTo('category')" :class="{on:'/category'===$route.path}">
               <img :src="$route.path.includes('/category')?imgArr[1].act:imgArr[1].normal" alt="">
               <span >分类</span>
           </div>
           <div class="tab-item" @click="switchTo('cart')" :class="{on:'/cart'===$route.path}">
               <img :src="'/cart'===$route.path?imgArr[2].act:imgArr[2].normal" alt="">
               <span>购物车</span>
           </div>
           <div class="tab-item" @click="switchTo('profile')" :class="{on:'/profile'===$route.path}">
               <img :src="'/profile'===$route.path?imgArr[3].act:imgArr[3].normal" alt="">
               <span>我的</span>
           </div>
       </div>
</template>

<script>
    export default {
        name: "TabFooter",
        created(){
            //console.log(this.$route.path);
        },
        data(){
            return {
                imgArr:[
                    {
                        normal:require('@/assets/common/img/tabFooter/Home.svg'),
                        act:require('@/assets/common/img/tabFooter/Home1.svg')
                    },
                    {
                        normal:require('@/assets/common/img/tabFooter/category.svg'),
                        act:require('@/assets/common/img/tabFooter/category1.svg')
                    },
                    {
                        normal:require('@/assets/common/img/tabFooter/cart.svg'),
                        act:require('@/assets/common/img/tabFooter/cart1.svg')
                    },
                    {
                        normal:require('@/assets/common/img/tabFooter/my.svg'),
                        act:require('@/assets/common/img/tabFooter/my1.svg')
                    }




                ]
            }
        },
        methods:{
            switchTo(path){
                switch (path) {
                    case 'home':
                        this.$router.push('/home')
                        break;
                    case 'category':
                        this.$router.push('/category')
                        break;
                    case 'cart':
                        this.$router.push('/cart')
                        break;
                    case 'profile':
                        this.$router.push('/profile')
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .on{
        color: red;
    }
    .bottom-tab{

        width:100vw;
        height: 50px;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 999;
        background: #ffffff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .tab-item{
            display: flex;
            flex: 1;
            text-align: center;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            span{
                font-size: 14px;
            }

            img{
                width: 24px;
                height: 24px;
                padding-bottom: 2px;
            }
        }
    }
</style>