export default [
    {
        path:"hot", name:"Hot",component:()=>import('@/views/category/children/Hot')
    },
    {
        path:"dig", name:"Dig",component:()=>import('@/views/category/children/Dig')
    },
    {
        path:"dress", name:"Dress", component:()=>import('@/views/category/children/Dress')
    },
    {
        path:"shoes", name:"Shoes",component:()=>import('@/views/category/children/Shoes')
    },
    {
        path:"bh",name:"Bh", component:()=>import('@/views/category/children/Bh')
    },
    {
        path:"sx",name:"Sx", component:()=>import('@/views/category/children/Sx')
    },
    {
        path:"my",name:"My", component:()=>import('@/views/category/children/My')
    },
    {
        path:"jd",name:"Jd", component:()=>import('@/views/category/children/Jd')
    },
    {
        path:"/",redirect:"/category/hot"
    }

]