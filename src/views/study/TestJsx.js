//jsx的概念：
//1、jsx是一个变量
//2、jsx可以静态绑定属性
//3、jsx可以动态绑定属性


import React from 'react';
import {inject ,observer} from 'mobx-react'
const ele = <h2>jsx是一个变量</h2>

function Bianliang(){
    return (
        <h2>通过函数引入</h2>
    )
}
//定义一个react组件
@inject('store')
@observer
class TestJsx extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:'green',
            fontSize:'50px'
        }    
    }
    bianliang(){
        return (
            <div>
                <span>这是一个span标签用于jsx嵌套</span>
                {ele}
            </div>
        )
    }
    colorChange(){
        this.setState({
            color:'red'
        })
    }
    style(){
        return(
            {color:this.state.color,fontSize:this.state.fontSize}
        )
    }
    render(){
        return (
            //这不是div标签这是jsx变量
            <div className='hehe'> 
                <div title='这是静态绑定的属性'>
                    <h2>这是静态绑定title属性</h2>
                </div>
                <Bianliang/>
                <h1 className={this.state.color}>这是动态绑定属性</h1>
                <button onClick={this.colorChange.bind(this)}>改变颜色</button>
                <h1 style={{color:'orange',fontSize:'40px'}}>静态绑定style属性</h1>
                <h1 style={this.style()}>动态绑定style属性</h1>
                <div>{this.bianliang()}</div>
                <h1>{this.props.store.Countstore.count}</h1>
            </div>
        );
    }
} 
export default TestJsx