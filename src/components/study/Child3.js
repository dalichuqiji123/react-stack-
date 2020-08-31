import React from 'react'
import ThemeCtx from '@/utils/theme'
export default class Child3 extends React.Component{
    componentDidMount(){
        console.log(this.context)
    }
    render(){
        // let theme=this.context
        return (
            <div>
                {/* <div style={{color:theme.color,background:theme.background}}>
               <h1 >我曾鑫豪无敌不服来战！！！</h1>
               </div> */}
            <ThemeCtx.Consumer>
            {
              (theme)=>(
                <div style={{color:theme.color,background:theme.background}}>
                  <h3>我曾鑫豪无敌不服来战！！！</h3>
                </div>
              )
            }
            </ThemeCtx.Consumer>
            </div>
        )
    }
}
// Child3.contextType=ThemeCtx
//通过上下文传递数据有两种方式：第一种就是注释的，第二种就是没有被注释的，这两种方式：都可以实现上下文传参。
//上下文就是用于解决组件父子关系过多而用props传参导致的代码不易维护的问题。
//用上下文传参就可以不用使用props直接让孙子辈的组件可以跳过父辈接收到爷爷辈的组件传下来的参数。