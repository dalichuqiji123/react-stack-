//代码分割就相当于vue中的懒加载
import loadable from '@loadable/component'

const  TestJsx =loadable(()=> import ('./study/TestJsx')) 
import TestProps from './study/TestProps'
import TestEvent from "./study/TestEvent"
import TestLanguage from "./study/TestLanguage"
import TestCondition from './study/TestCondition'
import TestList from './study/TestList'
import TestForm from './study/TestForm'
import TestLive from './study/TestLive'
import TestCheck from './study/TestCheck'
import TestLift from './study/TestLift'
import TestCompotision from './study/TestCompotision'
import TestContext from './study/TestContext'
import TestHoc from './study/TestHoc'
import TestHook from './study/TestHook'
import Goodlist from './good/goodlist'
import Detail from './good/Detail'
import Teststore from '../store/modules/Teststore'
import Testtodo from '../store/modules/Testtodo'
const routes=[
    {
        id:1,
        path:'/TestJsx',
        component:TestJsx,
        name:'Jsx语法'
    },
    {
        id:2,
        path:'/TestProps',
        component:TestProps,
        name:'Props父子组件传值'
    },
    {
        id:3,
        path:'/TestEvent',
        component:TestEvent,
        name:'事件绑定'
    },
    {
        id:5,
        path:'/TestLanguage',
        component:TestLanguage,
        name:'语言案例'
    },
    {
        id:6,
        path:'/TestCondition',
        component:TestCondition,
        name:'条件渲染'
    },
    {
        id:7,
        path:'/TestList',
        component:TestList,
        name:'列表渲染'
    },
    {
        id:8,
        path:'/TestForm',
        component:TestForm,
        name:'react表单'
    },
    {
        id:9,
        path:'/TestLive',
        component:TestLive,
        name:'生命周期'
    },
    {
        id:10,
        path:'/TestCheck',
        component:TestCheck,
        name:'react多选框'
    },
    {
        id:11,
        path:'/TestLift',
        component:TestLift,
        name:'组件之间传值'
    },
    {
        id:12,
        path:'/TestCompotision',
        component:TestCompotision,
        name:'组合'
    },
    {
        id:13,
        path:'/TestContext',
        component:TestContext,
        name:'上下文'
    },

    {
        id:14,
        path:'/TestHoc',
        component:TestHoc,
        name:'高阶组件'
    },
    {
        id:15,
        path:'/TestHook',
        component:TestHook,
        name:'Hooks'
    },
    {
        id:16,
        path:"/Goodlist",
        component:Goodlist,
        name:"商品列表",
        children:[
            {
                id:1601,
                path:'/Goodlist/Detail/:id/:name',
                component:Detail,
            }
        ]
    },
    {
        id:17,
        path:'/Teststore',
        component:Teststore,
        name:'状态管理'
    },
    {
        id:18,
        path:'/Testtodo',
        component:Testtodo,
        name:'任务列表'
    },
]
export default routes