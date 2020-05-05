import Toast from './Toast'
const obj={}
obj.install=function (vue) { //默认参数
    //console.log("创建toast",vue)

    //1.创建组件构造器
    const toastConstructor=vue.extend(Toast)
    //2.实例一个组件对象
    const toast1=new toastConstructor()
    //3.将实例对象挂载到一个元素上
    toast1.$mount(document.createElement("div"))
    //4.toast.$el对应的就是一个div,添加到body上
    document.documentElement.appendChild(toast1.$el)
   //5.将组件对象添加到vue原型链上
    vue.prototype.$toast1=toast1
}



export default obj