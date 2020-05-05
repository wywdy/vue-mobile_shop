<template>
    <div>
        <van-nav-bar
                title="购物车"
                left-arrow
                left-text="返回"
                @click-left="onClickLeft"
        />
        <div v-if="$store.state.cartList.length===0" style="margin-top: 20px">暂无商品</div>
        <div class="list" v-else>
            <van-swipe-cell v-for="(item,index) in dataList" :key="index" class="goods-card">
                <van-card
                        :num=item.count
                        :price=(item.price*item.count).toFixed(2)
                        :title=item.title
                        :thumb=x+item.imgurl
                >
                    <template #footer>
                        <van-button size="mini" type="danger" @click="btnclick1(item.id)">+</van-button>
                        <van-button size="mini" type="danger" @click="btnclick2(item.id)">-</van-button>
                    </template>
                </van-card>
                <template #right>
                    <van-button
                            square
                            text="删除"
                            type="danger"
                            class="delete-button"
                            @click="del(item.id)"
                    />
                </template>
            </van-swipe-cell>
        </div>
        <div class="cart-pay">
            <van-submit-bar
                    :price=test
                    button-text="结算"
            >
            </van-submit-bar>
       <tabFooter></tabFooter>
        </div>
    </div>
</template>

<script>
    import tabFooter from '@/components/com/TabFooter.vue'
    export default {
        name: "Cart",
        data(){
            return {
                dataList:this.$store.state.cartList,
                checked:false,
                x:"/api",
                total:0
            }
        },
        computed:{
            test(){
              let price=0
              this.$store.state.cartList.forEach((v)=>{
                  price+=(v.price)*(v.count)*100
              })
                this.total=price
                return this.total
            }
        },
        components:{
            tabFooter
        },
        methods:{
            onClickLeft(){
                this.$router.back()
            },
            btnclick1(id){
                 this.$store.commit('addCount1',id)
            },
            btnclick2(id){
                this.$store.commit("addCount2",id)
            },
            del(id){
                this.$store.commit('del',id)
            }
        },
        mounted() {

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
    .goods-card{
        margin: 0;
        background: white;
    }
    .delete-button{
        height: 100%;
    }

</style>