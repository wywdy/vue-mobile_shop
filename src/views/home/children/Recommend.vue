<template>
    <div class="recommend">
         <div v-for="(item,index) in recommend" :key="index">
             <a href="#">
                 <img :src="'/api'+item.imgurl" alt="">
             </a>
             <span v-text="item.name"></span>
         </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props:{
            recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped lang="less">
   .recommend{
       width: 95%;
       margin: 10px auto;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-wrap: wrap;
       &>div{
           flex-basis: 20%;
           height: 100px;
           margin: 10px 5px;
           display: flex;
           flex-direction: column;
           span{
               margin-top: 5px;
           }
           img{
               width: 100%;
               height: 100%;
           }
       }
   }
</style>