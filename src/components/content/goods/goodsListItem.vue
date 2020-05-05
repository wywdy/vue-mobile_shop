<template>
    <div class="goodsListItem" @click="itemClick">
            <img :src=x+goodsItem.imgurl alt="" @load="imgLoad">
             <p>{{ goodsItem.title}}</p>
            <div class="price">
                <span class="price_goods" >￥ {{ goodsItem.price }}</span>
                <span>优惠多多</span>
            </div>
        </div>
</template>

<script>
    export default {
        name: "goodsListItem",
        props:{
            goodsItem:{
                type:Object,
                default() {
                    return { }
                }
            }
        },
        data(){
            return {
                list:[
                    {imgurl:require('@/assets/common/img/a1.jpg')},
                    {imgurl:require('@/assets/common/img/a2.jpg')},
                    {imgurl:require('@/assets/common/img/a3.jpg')},
                    {imgurl:require('@/assets/common/img/a4.jpg')},
                ],
                x:"/api",
                id:0
            }
        },
        methods:{
            imgLoad(){
                this.$bus.$emit("imgitemload")
            },
            itemClick(){
                this.$router.push('/detail/'+this.goodsItem.id)  //对应path:'/detail/:sid'
              /*  this.$router.push({
                    path:'/detail',
                    query:{
                        id:this.goodsItem.id
                    }
                })
                对应path:'/detail'
                */
            }
        }
    }
</script>

<style scoped lang="less">
  .goodsListItem{
      flex-basis: 49vw;
      display: flex;
      flex-direction: column;
      padding: 5px 0;
          img{
              margin-bottom: 10px;
              width: 100%;
              border-radius: 5px;
          }
      p{
          display: -webkit-box;  //超出文字部分用... 表示
          overflow: hidden;
          -webkit-box-orient: vertical;
          padding:0 0.08rem;
          margin-top: 0.1rem;
          font-size: 15px;
      }
      .price{
          display: flex;
          justify-content: center;
          margin: 0.1rem 0 0.1rem 0;
          .price_goods{
              color: #EF232F;
              margin-right: 5px;
          }
      }

  }
</style>