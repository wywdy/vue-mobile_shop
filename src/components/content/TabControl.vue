<template>
        <div class="title">
            <span :class="{active:controlIndex===index}"
                  v-for="(item,index) in title"
                  :key="index"
                  @click="controlChange(index)"
                 >{{ item }}</span>
        </div>

</template>

<script>
    export default {
        name: "TabControl",
        props:{
            title:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                controlIndex:0
            }
        },
        methods:{
            controlChange(index){
                this.controlIndex=index
                this.$emit("titleChange",index)
            }
        }
    }
</script>

<style scoped lang="less">

       .title{
           width: 100%;
           height: 40px;
           background: #ffffff;
           display: flex;
           justify-content: space-around;
           align-items: center;
       }
       .active{
           color: #EF232F;
           border-bottom: 3px solid #EF232F;
       }
</style>