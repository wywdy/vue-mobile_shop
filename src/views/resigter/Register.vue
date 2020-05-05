<template>
    <div class="register">
       <div class="bank">
           <div class="title">注册</div>
           <div class="bank-content">
               <section>
                   <input type="text" placeholder="用户名" v-model=" userInfo.name">
               </section>
               <section>
                   <input type="password" placeholder="密码" v-model=" userInfo.pwd">
               </section>
               <section>
                   <input type="password" placeholder="确认密码" v-model=" userInfo.pwde">
               </section>
               <section>
                   <input type="text" maxlength="11" placeholder="手机号码" v-model=" userInfo.tel">
               </section>
               <section>
                 <button @click.prevent="register">注册</button>
               </section>
               <section>
                 <button class="white" @click.prevent="back">返回</button>
               </section>
           </div>

       </div>
    </div>
</template>

<script>
    import {getregister} from "../../ntework/register";

    export default {
        name: "Register",
        data(){
            return {
                userInfo:{
                    name:"",
                    pwd:"",
                    pwde:"",
                    tel:""
                }

            }
        },
        methods:{
            back(){
                this.$router.back()
            },
             register(){
                if(!this.userInfo.name){
                    this.$toast("用户名不能为空")
                    return
                }
                if(!this.userInfo.pwd){
                    this.$toast("密码不能为空")
                    return
                }
                if(!this.userInfo.pwde){
                    this.$toast("请确认密码")
                    return
                }
                if(this.userInfo.pwd!=this.userInfo.pwde){
                    this.$toast("密码不一致")
                    return
                }
                getregister(this.userInfo).then(res=>{
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .register{
        width: 100vw;
        height: 100vh;
        background: url("./../../assets/login.png") no-repeat center ;
        background-size: cover;
        position: relative;
        .bank{
            width: 80%;
            height: 400px;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background: rgba(0, 0, 0, 0.43);
            .title{
                font-size: 24px;
                color: white;
                padding: 10px;
            }
            .bank-content{
                margin-top: 20px;
                input{
                    border: none;
                    border-bottom: 1px solid greenyellow;
                    background: none;
                    padding: 15px 10px;
                    color: white;
                }
                input::placeholder{
                     color: white;
                }
                button{
                    background: #36dd52;
                    border: none;
                    width: 80%;
                    padding: 10px 0;
                    margin-top: 10px;
                    color: #727272;
                    margin-bottom: 20px;
                }
                .white{
                    color: white;
                    background: rgba(80, 199, 255, 0.46);
                }
            }
        }
    }

</style>