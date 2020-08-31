import React from 'react'
import {Child1} from '@/components'
export default class TestProps extends React.Component{
    constructor(props){
        super(props)
        this.state={
            aaa:"我是aaa",
            msg:"我很强我知道"
        }
    }
    changemsg(){
        let num = Math.random()
        this.setState({msg:'你知道个屁！！！'},()=>{
            console.log('更新成功')
        })
    }
    render(){
        let {aaa, msg} = this.state
        aaa=aaa+'!!!!'
        return (
            <div className='child1'>
                {/* 动态传值 */}
                <Child1 aaa={aaa} />
                {/* 静态传值 */}
                <Child1 bbb="我是bbb" />
                <Child1>
                    <a href='https://www.baidu.com' >百度一下</a>
                    <button onClick={this.changemsg.bind(this)}>嘲讽技能</button>
                    <span>{msg}</span>
                </Child1>
            </div>
        )
    }
}