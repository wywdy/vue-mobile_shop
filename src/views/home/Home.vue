<template>
    <div class="home">
        <!--        顶部导航-->
        <van-nav-bar
                title="心悦购物"
                :border="false"
        >
            <template #right>
                <van-button round color="#ff6b81" size="small" @click="login">登录</van-button>
            </template>
        </van-nav-bar>
<!--        覆盖-->
        <tabControl :title="['流行','新款','精选']"
                    @titleChange="titlechange"
                    ref="tabControl0" class="tab-control" v-show="isTabShow"></tabControl>
<!--        滑动区域-->
        <scroll class="wrap" ref="wrap"
                @scroll="contentScorll" @pullup="loremore">
            <!--        轮播图-->
            <homeswiper :banner="banner" @swiperload="swiperimgload"></homeswiper>
            <!--        推荐-->
            <recommend :recommend="recommend"></recommend>
            <!--        本周流行-->
            <feature></feature>
            <!--        导航吸顶,scroll组件中不好使用-->
<!--            <van-sticky :offset-top="46">-->
                <!-- tabControl导航 -->
                <tabControl :title="['流行','新款','精选']"
                            @titleChange="titlechange"
                            ref="tabControl"></tabControl>
<!--            </van-sticky>-->
            <!--        商品展示-->
            <goodsList :goods="showGoods"></goodsList>

        </scroll>
        <!--            滚回顶部,组件的原生事件要用native才能起作用-->
        <backtop @click.native="goTo" v-show="isShowBackTo"></backtop>
        <!--        底部导航-->
        <tabFooter></tabFooter>
    </div>
</template>

<script>
    //引入网络请求
    import {getBanner, getRecommend,getGoods} from "../../ntework/home";

    //引入子组件
    import tabFooter from '@/components/com/TabFooter.vue'
    import homeswiper from '@/views/home/children/HomeSwiper.vue'
    import recommend from '@/views/home/children/Recommend.vue'
    import feature from '@/views/home/children/Feature.vue'
    import tabControl from '@/components/content/TabControl.vue'
    import goodsList from '@/components/content/goods/goodsList.vue'
    import scroll from '@/components/com/Scorll.vue'
    import backtop from '@/components/com/BackTop.vue'

    export default {
        name: "Home",
        data() {
            return {
                banner: [],
                recommend: [],
                goods: {
                    pop:{ page:0,list:[] },
                    news:{ page:0,list:[]},
                    sell:{ page:0,list:[]}
                },
                currentType:"pop",
                isShowBackTo:false,
                isTabShow:false,
                tabConoffsetto:0,
                saveY:0, //位置距离
            }
        },
        computed:{
            showGoods(){
                return this.goods[this.currentType].list
            }
        },
        components: {
            tabFooter,
            homeswiper,
            recommend,
            feature,
            tabControl,
            goodsList,
            scroll,
            backtop
        },
        methods: {
            debounce(func,delay=500){
                let timer=null
                return function () {
                    clearTimeout(timer)
                    timer=setTimeout(()=>{
                        func.apply(this)
                    },delay)
                }
            },
            titlechange(index) {
                switch (index) {
                    case 0:
                       this.currentType="pop"
                        break
                    case 1:
                        this.currentType="news"
                        break
                    case 2:
                        this.currentType="sell"
                }
                this.$refs.tabControl0.controlIndex=index
                this.$refs.tabControl.controlIndex=index
            },
            getBanners(){
                getBanner().then(res => {
                    //  console.log(res);
                    if (res.code == 200) {
                        // console.log(res.data);
                        this.banner = res.data
                    } else {
                        console.log(res.msg)
                    }

                })
            },
            getRecommend(){
                getRecommend().then(res => {
                    if (res.code == 200) {
                        console.log(res);
                        this.recommend = res.data
                    } else {
                        console.log(res.msg);
                    }
                })
            },
            getGoods(type){
                let page=this.goods[type].page+1
                getGoods(type,page).then(res=>{
                    //console.log(res.data);
                   // this.goods[type].list=res.data  这样写会覆盖前面的数据
                    //1.
                   /* for(let i of res.data){
                         this.goods[type].list.push(i)
                    }*/
                   //2.
                    this.goods[type].list.push(...res.data)
                    this.goods[type].page+=1
                    console.log(this.goods[type].list);
                   // console.log(this.goods[type].page);
                    //完成上拉加载更多
                    this.$refs.wrap.finishUp()

                })
            },
            goTo(){
               this.$refs.wrap.scrollTo(0,0,500)
                //500表示0.5s内滚动到指定位置
            },
            contentScorll(position){
               // console.log(-position.y);
                //判断backup是否显示
                this.isShowBackTo=-position.y>1600
                //判断tanControl是否吸顶
                this.isTabShow=-position.y>=this.tabConoffsetto
            },
            loremore(){
                console.log("上拉加载")
                this.getGoods(this.currentType)
            },
            swiperimgload(){
                //获取tabControl的offsettop, $el属性获取组件元素
                this.tabConoffsetto=this.$refs.tabControl.$el.offsetTop
                //console.log(this.tabConoffsetto);
            },
            login(){
                this.$router.push('/login')
            }
        },
        mounted() {
             this.getBanners()
             this.getRecommend()
             this.getGoods("pop")
             this.getGoods("news")
             this.getGoods("sell")
             //监听图片加载完成
             const refresh=this.debounce(this.$refs.wrap.refresh,200)
            this.$bus.$on("imgitemload",()=>{
                 refresh()
            })

        },
        //活跃状态
        activated() {
           this.$refs.wrap.scrollTo(0,this.saveY,0)
            this.$refs.wrap.refresh()
        },
        //缓存状态
        deactivated() {
            this.saveY=this.$refs.wrap. getScorllY()
        }
    }
</script>

<style scoped lang="less">
    .home {
        height: 100vh;
        .van-nav-bar {
            background: #ff8a9d;
        }
        .tab-control{
            position: relative;
            z-index: 99;
        }
        .wrap{
            height: calc(100% - 96px);
            position: relative;
        /*    .fixed{
                position: fixed;
                top:46px;
                left: 0;
                right: 0;
            }*/
        }
    }
</style>