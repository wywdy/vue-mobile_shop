<template>
    <div class="login">
        <h2>Welcome XY购物</h2>

        <div class="login-content">
            <div class="title">
                <a href="javascript:" :class="{act:loginMode}" @click="changeMode(false)">账号登录</a>
                <a href="javascript:" :class="{act:!loginMode}" @click="changeMode(true)">短信登录</a>
            </div>
<!--            账号登录面板-->
            <div :class="{current:!loginMode}">
                <section>
                    <input type="text" placeholder="用户名" v-model="username">
                </section>
                <section>
                    <input type="password" placeholder="密码" v-model="password">
                </section>
                <section class="yzm">
                     <input type="text" placeholder="验证码" v-model="captchaCode1">
                    <span style="display: block" class="svg">
                        <img src="/api/login/captcha"
                             alt="" ref="captcha1"
                             @click="getCaptcha">
                    </span>
                </section>
                <section>
                    <button type="button" class="btn" @click="login1">登录</button>
                    <button type="button" @click="back" class="btn white">返回</button>
                </section>
            </div>
<!--            短信登录面板-->
            <div  :class="{current:loginMode}">
                <section class="yzm">
                    <input type="text" maxlength="11" placeholder="手机号" v-model="phone">
                    <span v-if="!countDown" @click="send" :class="{telright:phoneRight}">发送</span>
                    <span v-else disabled>{{ countDown }} s</span>
                </section>
                <section class="yzm">
                    <input type="text" v-model="code">
                    <span>短信验证码</span>
                </section>
                <section class="yzm">
                    <input type="text" v-model="captchaCode2">
                    <span style="display: block" class="svg">
                        <img src="/api/login/captcha"
                             alt="" ref="captcha"
                             @click="getCaptcha">
                    </span>
                </section>
                <section>
                    <button type="button" class="btn" @click="login2">登录</button>
                    <button type="button" class="btn white" @click="back">返回</button>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import {dxlogin,zhlogin,getCode} from "../../ntework/lohin";

    export default {
        name: "Login",
        data(){
            return {
                loginMode:true,  //登录方式，true为账号，false为短信
                phone:"", //手机号
                countDown:0, //倒计时,
                username:""  ,//用户名
                password:"",  //密码
                code:"",// 短信验证码
                captchaCode1:"",//图形验证码
                captchaCode2:"",//图形验证码
                userInfo:{} //用户信息
            }
        },
        computed:{
            //验证手机号格式
            phoneRight(){
                return /^1[3456789]\d{9}$/.test(this.phone)
            }
        },
        methods:{
            back(){
                this.$router.back()
            },
            changeMode(bool){
                return bool?this.loginMode=false:this.loginMode=true
            },
            send(){
               //开启定时器
                let timer=null
                if(this.phoneRight){
                      getCode().then(data=>{
                          console.log(data);
                          if(data.code==400){
                              this.$toast("获取验证码失败")
                          }else{
                              this.countDown=60
                              clearInterval(timer)
                              timer=setInterval(()=>{
                                  this.countDown-=1
                                  //关闭定时器
                                  if(this.countDown==0){
                                      clearInterval(timer)
                                  }
                              },1000)
                          }
                      })

                }
            },
            //获取验证码
            getCaptcha(){
                //加入时间戳,确保每一个captcha不同
                this.$refs.captcha.src="/api/login/captcha?time="+new Date()
                this.$refs.captcha1.src="/api/login/captcha?time="+new Date()
            },
             login1(){  //账号登录
                if(!this.username){
                    this.$toast("用户名不能为空")
                    return
                }else if(!this.password){
                    this.$toast("密码不能为空")
                    return
                }else if(!this.captchaCode1){
                    this.$toast("验证码不能为空")
                    return
                }else{
                    zhlogin({
                        username:this.username,
                        userpwd:this.password,
                        captcha:this.captchaCode1
                    }).then(data=>{
                        console.log(data);
                        if(data.code==4000){
                            this.$toast("验证码错误")
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                }

            },
            login2(){  //短信登录

                if(!this.phone){
                    this.$toast("请输入手机号")
                    return
                }else if(!this.phoneRight){
                    this.$toast("请正确输入手机号")
                    return;
                }
                else if(!this.code){
                    this.$toast("请输入短信验证码")
                    return;
                }else if(!this.captchaCode2){
                    this.$toast("请输入图形验证码")
                    return;
                }

                dxlogin({
                    phone:this.phone,
                    code:this.code,
                    captcha:this.captchaCode2
                }).then(data=>{
                    console.log(data);
                    if(data.code==4001){
                        this.$toast.fail('图形验证码不正确');
                    }else if(data.code==4002){
                        this.$toast("短信验证码不正确")
                    }else {
                        this.$toast("你的号码未注册")
                        this.countDown=0
                    }
                }).catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .current{
        display: none;
    }
    .telright{
        color: #50c7ff !important;
    }
    .yzm{
        position: relative;
        &>span{
            position: absolute;
            right: 45px;
            top:10px;
            color: gainsboro;
            img{
                width: 90px;
                height: 30px;
                padding-bottom: 5px;
            }
        }

    }
   .login{
       width: 100vw;
       height: 100vh;
       background: url("./../../assets/login.png") no-repeat center ;
       background-size: cover;
       position: relative;
       .back{
           position: absolute;
           left: 15px;
           top: 10px;
           color: #6acac2;
       }
       h2{
           padding-top: 20px;
           color: #ffe11d;
       }
       &>div{
           width: 80%;
           position: absolute;
           top:50%;
           left: 50%;
           transform: translate(-50%,-50%);
           background: rgba(0, 0, 0, 0.43);
           &>.title{
               margin: 20px 0;
               a{
                    margin: 0 10px;
                    padding-bottom: 5px;
                    color: #ffffff;
                    display: inline-block;

               }
               a.act{
                   color: #00dd00;
                   border-bottom: 3px springgreen solid;
               }

           }
             section{
                 display: flex;
                 flex-direction: column;
                 justify-content: center;
                 align-items: center;
             margin: 20px 0;
               input{
                   border: none;
                   border-bottom: 1px solid greenyellow;
                   background: none;
                   padding: 10px;
                   color: white;
               }
               input::placeholder{
                   color: white;
               }
               .btn{
                    background: #36dd52;
                    border: none;
                    width: 80%;
                    padding: 10px 0;
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