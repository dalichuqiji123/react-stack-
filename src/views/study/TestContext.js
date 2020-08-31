import React from 'react'
import ThemeCtx from '@/utils/theme'
import {Child3} from '@/components'
export default class TestContext extends React.Component{
    constructor(props){
        super(props)
        this.state={
            theme:[
                // 换皮肤
                 {
                  color: '#000000',
                  background: '#eeeeee'
                },
                 {
                  color: '#ffffff',
                  background: '#222222'
                },
                {
                  color: '#ffffff',
                  background: '#ff0000'
                },
                {
                    color: '#ccc',
                    background: '#ff0000'
                },
                {
                    color: '#999',
                    background: '#fff'
                }
            ],
            count:1
        }
    }
    colorChange(){
        let count1=parseInt(Math.random()*4)
        this.setState({count:count1})
    }
    render (){
        let {theme}=this.state
        let {count}=this.state
        return (
            <ThemeCtx.Provider value={theme[count]}>
            <Child3 />
            <button onClick={this.colorChange.bind(this)}>颜色变换</button>
            </ThemeCtx.Provider>
        )
    }
}
//上下文就是一种很方便的传参方式：一般的传参父组件传递参数给子组件是通过props方式，但是当层数多了就是那种父组件嵌套子组件，
//在嵌套组件在嵌套子组件，然后最后一个子组件想要第一个父组件也就是他曾曾曾爷爷的值时，然后如果通过prop是来传参是就会很复杂就导致，
//代码不容易维护，为了解决这个问题，就推出了context上下文这可以跨过一系列的父组件来个曾曾曾孙组件传参，从而时代码容易维护。
//我觉得这样挺好的那我就来说一下过程吧。
//1、首先在父组件里面引入一个封装好的js文件也就是theme.js文件。这个文件封装如下：
//引入react插件
//import React from 'react'\
//const ThemeCtx = React.createContext()
//然后将ThemeCtx抛出。是不是很简单。
//然后父组件里面就可以使用<ThemeCtx.Provider></ThemeCtx.Provider>这个标签把曾曾曾孙的标签给包裹起来，然后标签里面可以传值，
//例如：<ThemeCtx.Provider value={this.state.msg}>,然后这样曾曾曾孙组件里面就可以接收到这个值了。具体怎么接收的如下：
//接收值的话有两种方式：
//第一种：这里我把曾曾曾孙组件的名字设置为child。只需要在后面设置一句话：child.contextType=ThemeCtx（就是引入的封装好的文件）
//然后就会有一个this.context值这个值就是曾曾曾爷爷传过来的值。然后在曾曾曾孙里面就可以使用这个值来做一系列的渲染。
//第二种（我不喜欢）就是使用<ThemeCtx.Consumer>{(theme)=>(组件内容)}</ThemeCtx.Consumer>把所有东西给包起来然后通过一个箭头函数。
//上一行的箭头函数里面的theme就是曾曾曾爷爷传过来的数据。然后就可以用这个数据做一系列的操作。