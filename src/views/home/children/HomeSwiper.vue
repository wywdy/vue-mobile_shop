<template>
    <div>
        <van-swipe  :autoplay="3000"
                   indicator-color="red"

         >
            <van-swipe-item v-for="(item,index) in banner" :key="index" >
                <img :src=item.imgurl alt="" @load="imgload">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
             banner:{
                 type:Array,
                 default(){
                     return []
                 }
             }
        },
        methods:{
            imgload(){
                this.$emit("swiperload")
            }
        },
        mounted() {
            this.imgload()
        }

    }
</script>

<style scoped lang="less">
   .van-swipe{
       /*margin-top: 46px;*/
        width: 100vw;
        height: 200px;
       .van-swipe-item{
           width: 100%;
           height: 100%;
        img{
            width: 100%;
            height: 100%
        }
       }
   }

</style>