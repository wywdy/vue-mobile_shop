<template>
    <div class="back-top">
        <img :src="imgsrc" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        data(){
            return {
                imgsrc:require('@/assets/common/img/top.png')
            }
        }
    }
</script>

<style scoped>
    .back-top{
        position: fixed;
        right: 15px;
        bottom: 60px;
        z-index: 99;
    }
</style>