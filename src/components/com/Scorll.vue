<template>
    <div class="wrap" ref="wrap">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "Scorll",
        data(){
            return {
                bscroll:null,
            }
        },
        methods:{
            scrollTo(x,y,time=300){
                this.bscroll.scrollTo(x,y,time)
            },
            finishUp(){
                this.bscroll.finishPullUp()
            },
            refresh(){
                this.bscroll.refresh()
                console.log(0)
            },
            getScorllY(){
                return this.bscroll.y
            }
        },
        //不能在created中调用，为null
        mounted() {
            //console.log(this.$refs.wrap);
            //创建 Bscroll 对象
            this.bscroll=new Bscroll(this.$refs.wrap,{
                // probeType表示是否监听滚动，默认为0（0,1 不监听），
                // 2表示手指滑动的过程监听，手指离开时的惯性过程不监听
                // 3 滚动过程全监听
                probeType:3,
                click:true ,//bscroll会阻止原生事件，默认false,
                pullUpLoad:true
            })
                //监听滚动位置
            this.bscroll.on('scroll',(position)=>{
                //  console.log(position);
                this.$emit("scroll",position)
            })
                //监听上拉刷新
            this.bscroll.on("pullingUp",()=>{
              //  console.log("上拉加载更多")
                //发送网络请求数据

                //请求结束之后必须调用,不然只能上拉加载一次
              /*  setTimeout(()=>{
                    this.bscroll.finishPullUp()
                },2000)*/
                this.$emit("pullup")

            })
        }
    }
</script>

<style scoped>

</style>