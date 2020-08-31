import React from 'react'
// 事件绑定的三种写法（三种方式）
// 1、bind方式绑定
// 2、箭头函数绑定
export default class TestEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:1
        }
        this.clickhandle2=this.clickhandle.bind(this)
    }
    clickhandle(){
        let {num}=this.state
        this.setState({
            num:num+1
        })
    }
    // 阻止默认事件
    linkhandle(e){
        e.preventDefault()
    }
    // 使用e来搞定键盘事件
    inputhandle(e){
        if(e.keyCode==13){
            console.log('表单提交')
        }
    }
    render(){
        let {num} = this.state
        return (
            <div>
                <h2>{num}</h2>
                <button onClick={this.clickhandle.bind(this)}>事件绑定1</button>
                <button onClick={this.clickhandle2}>事件绑定2</button>
                <button onClick={()=>{this.clickhandle()}}>事件绑定3</button><br/>
                {/* 阻止默认事件 */}
                <a href='https://www.baidu.com' onClick={(e)=>this.linkhandle(e)}>百度一下</a>
                {/* 表单提交 */}
                <input onKeyUp={this.inputhandle.bind(this)} />
            </div>
        )
    }
}