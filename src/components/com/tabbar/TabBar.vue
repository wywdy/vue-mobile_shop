<template>
    <div class="tab-bar">
        <slot></slot>
       <!-- <tabItem  v-for="(item,index) in tabItems" :key="index">
            <div slot="tab-icon">
                <img :src="item.imgurl" alt="">
            </div>
            <div slot="tab-icon-active">
                <img :src="item.imgurlact" alt="">
            </div>
            <div>
                <div slot="tab-title">
                    {{ item.name }}
                </div>
            </div>

        </tabItem>-->
    </div>
</template>

<script>
    import tabItem from './TabItem'

    export default {
        name: "TabBar",
        data() {
            return {
                tabItems: [
                    {
                        name: '首页', imgurl: require('@/assetsassets/common/img/tabFooter/Home.svg'),
                        imgurlact: require('@/assetsassets/common/img/tabFooter/Home1.svg'), path: "/home"
                    },
                    {
                        name: '分类', imgurl: require('@/assetsassets/common/img/tabFooter/category.svg'),
                        imgurlact: require('@/assetsassets/common/img/tabFooter/category.svg'), path: "/home"
                    },
                    {
                        name: '购物车', imgurl: require('@/assetsassets/common/img/tabFooter/cart.svg'),
                        imgurlact: require('@/assetsassets/common/img/tabFooter/Home.svg'), path: "/home"
                    },
                    {
                        name: '我的', imgurl: require('@/assetsassets/common/img/tabFooter/my.svg'),
                        imgurlact: require('@/assetsassets/common/img/tabFooter/my1.svg'), path: "/home"
                    },
                ]
            }
        },
        components: {
            tabItem
        },
        computed:{
            isCurrent(){
                return this.$route.path
            }
        },
        methods:{
            changeTabTitle(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar{
        width: 100%;
        height: 50px;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>