import React from 'react'
import {Modal} from '@/components'

function Modalbtn(props){
    return (
        <div>
            <span>取消</span>
            <span>确定</span>
        </div>
    )
}
function ModalInput(props){
    return(
        <div>
            请输入手机号：
            <div><input /></div>
        </div>
    )
}
export default class TestCompotision extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:true
        }
    }
    onclose(){
        console.log(111)
        this.setState({show:false})
    }
    render(){
        let {show}=this.state
        return(
            <div>
                <h1>测试组合</h1>
                <Modal 
                    tip={<span>提示</span>}
                    main={<h3>您确定要删除吗？</h3>}
                    btn={<Modalbtn />}
                    show={show}
                    onClose={this.onclose.bind(this)}
                />
                <Modal 
                    tip={<span>提示</span>}
                    main={<ModalInput />}
                    btn={<Modalbtn />}
                    show={show}
                    onClose={this.onclose.bind(this)}
                />
            </div>
        )
    }
}
//组合就是：有的组件无法提前知道里面的内容就例如这个提示框。不知道提示框里面到底是怎样的结构那么我们就可以先确定这个组件的框架，
//就是Modal里面的那些，然后通过props.children来给Modal组件传递子组件，这样就可以实现将任意子组件传给他们。这里我们就是
//讲ModalInput组件和Modalbtn这两个无状态组件作为子组件传递给了Modal。tip也就是使用jsx的嵌套原理，把里面的内容传递给了Modal