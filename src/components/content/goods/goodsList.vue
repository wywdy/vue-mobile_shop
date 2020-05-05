<template>
    <div class="goodsList">
         <goodsItem
                    v-for="(item,index) in goods"
                    :key="index"
                    :goodsItem="item">
         </goodsItem>
    </div>
</template>

<script>
    import goodsItem from '@/components/content/goods/goodsListItem'
    export default {
        name: "goodsList",
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            goodsItem
        }
    }
</script>

<style scoped lang="less">
    .goodsList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>