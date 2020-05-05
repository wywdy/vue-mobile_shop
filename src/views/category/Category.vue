<template>
    <div class="category">
        <ly-tab v-model="selectId"
                :options="options"
                :items="items"
                @change="handleChange"
                class="fix" ></ly-tab>
        <router-view></router-view>
        <tabFooter></tabFooter>
    </div>
</template>

<script>
    import tabFooter from '@/components/com/TabFooter'
    export default {
        name: "Category",
        data(){
            return {
                selectId:0, //选择id
                items:[
                    {label:"热门"},
                    {label:"服装"},
                    {label:"鞋包"},
                    {label:"数码"},
                    {label:"百货"},
                    {label:"生鲜"},
                    {label:"母婴"},
                    {label:"家电"},
                ],
                options:{
                    activeColor:"#e17055" //选中的颜色
                },
                subRouters:[
                    '/category/hot',
                    '/category/dress',
                    '/category/shoes',
                    '/category/dig',
                    '/category/bh',
                    '/category/sx',
                    '/category/my',
                    '/category/jd',
                ]
            }
        },
        components:{
            tabFooter
        },
        methods:{
            handleChange(item,index){
               this.$router.push(this.subRouters[index])
            }
        }

    }
</script>

<style scoped lang="less">
   .category{
       width: 100%;
       height: 100%;
       background-color: #89fff7;
       padding-top: 44px;
   }
    .fix{
        position: fixed;
        left: 0;
        top:0;
        z-index: 100;
    }
</style>