<template>
    <div class="params">
         <h3>商品参数</h3>
        <div class="content">
            <table>
                <tr v-for="(item,index) in cs" :key="index" class="tr">
                    <td class="title">{{ item.name }}</td>
                    <td v-for="(v,i) in item.items" :key="i" class="nr">
                        {{ v.name }}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Params",
        data(){
            return {
               cs:[
                   {name:'尺码',items:[
                           {id:1,name:'S'},
                           {id:2,name:'M'},
                           {id:3,name:'L'},
                           {id:4,name:'SM'},
                       ]},
                   {name:'胸围',items:[
                           {id:1,name:'100'},
                           {id:2,name:'105'},
                           {id:3,name:'110'},
                           {id:4,name:'123'},
                       ]},
                   {name:'袖长',items:[
                           {id:1,name:'61'},
                           {id:2,name:'62'},
                           {id:3,name:'63'},
                           {id:4,name:'64'},
                       ]
                   },
                   {name:'裤长',items:[
                           {id:1,name:'96'},
                           {id:2,name:'97'},
                           {id:3,name:'98'},
                           {id:4,name:'99'},
                       ]},
                   {name:'衣长',items:[
                           {id:1,name:'54'},
                           {id:2,name:'55'},
                           {id:3,name:'56'},
                           {id:4,name:'57'},
                       ]},
               ]
            }
        }
    }
</script>

<style scoped lang="less">
   .params{
       margin-top: 20px;
       h3{
           padding: 20px 0;
           border-top: 3px solid #cccccc;
       }
       table{
           width: 95%;
           margin: 0 auto;
           font-size: 18px;
           border-collapse: collapse;
           tr{
               height: 54px;
           }
           td{
               border-bottom: 1px solid #828282;
           }
           .title{
               padding: 0;
               color: rgba(98, 98, 98, 0.87);
               font-size: 20px;
               color: #ffac15;
           }

       }
   }
</style>