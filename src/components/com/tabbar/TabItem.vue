<template>
    <div class="tab-item" @click="changeTabTitle(path)">
        <div  v-if="!isActive">
            <slot name="tab-icon"></slot>
        </div>
       <div v-else>
           <slot name="tab-icon-active"></slot>
       </div>
        <div :style="isActiveColor">
            <slot name="tab-title"></slot>
        </div>
       <!-- <div :class="{active:isActive}">
            <slot name="tab-title"></slot>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "TabItem",
        props:{
            path:{
                type:String,
                default:""
            },
            activeColor:{
                type:String,
                default:"red"
            }
        },
        data(){
            return {
                //isActive:false
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)!==-1
            },
            isActiveColor(){
                return this.isActive?{color:this.activeColor}:{}
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
   .tab-item{
       flex: 1;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }
   /* .active{
        color:red
    }*/
</style>