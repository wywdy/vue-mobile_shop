<template>
    <div class="toast" v-show="isShow">
        <div>{{ message }}</div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data(){
            return {
                message:"",
                isShow:false
            }
        },
        methods:{
            show(msg="请输入文案",duration=2000){
                this.message=msg
                this.isShow=true
                setTimeout(()=>{
                    this.msg=""
                    this.isShow=false
                },duration)
            }
        }
    }
</script>

<style scoped>
   .toast{
       position: fixed;
       top:50%;
       left: 50%;
       transform: translate(-50%,-50%);
       z-index: 99;
       background: rgba(98, 98, 98, 0.77);
   }
    .toast>div{
        padding: 5px 10px;
        color: white;
        font-size: 20px;
    }
</style>