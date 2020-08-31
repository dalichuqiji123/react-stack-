import React from 'react'
//引入antd组件库中的Button，在这之前必须要安装antd并且在App.js中引入import 'antd/dist/antd.css'，就可以使用了。
import {Button} from 'antd'
export default class Goodlist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            goods:[
                {id:1,name:'手机'},
                {id:2,name:'电脑'},
                {id:3,name:'平板'},
                {id:4,name:'手表'},
            ]
        }
    }
    onGood(ele){
        console.log(ele)
        this.props.history.push('/Goodlist/Detail/'+ele.id+'/'+ele.name)
    }
    creactList(){
        let {goods} = this.state
        return goods.map(ele=>(
            <div key={ele.id} style={{cursor:'pointer',margin:'10px auto'}}
            onClick={this.onGood.bind(this,ele)}>
                <span>{ele.id}</span>
                <span>{'-'}</span>
                <span >{ele.name}</span>
            </div>
        ))
    }
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h1>商品列表</h1>
                <Button type='primary'>按钮</Button>
                {this.creactList()}
            </div>
        )
    }
}