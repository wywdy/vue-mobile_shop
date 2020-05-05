<template>
    <div class="feature">
        <a href="http://act.mogujie.com/zzlx67">
            <img :src="imgurl" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: "Feature",
        data(){
            return {
                imgurl:require('@/assets/common/img/recommend_bg.jpg')
            }
        }
    }
</script>

<style scoped lang="less">
    .feature{
        margin-top: 20px;
    }
   a{
       display: block;
       width: 100vw;
       height: 300px;
       img{
           width: 100%;
           height: 100%;
       }
   }
</style>