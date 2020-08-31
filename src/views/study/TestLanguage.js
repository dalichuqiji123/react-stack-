import React from 'react'
import {Child2} from '@/components'
export default class TestLanguage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lang:4
        }
    }
    onchange1(id){
        this.setState({
            lang:id
        })
    }
    render(){
        let {lang}=this.state
        return (
            <div>
                <h1>检测父子间通信</h1>
                <Child2 lang={lang} onChange={this.onchange1.bind(this)}  />
            </div>
        )
    }
}