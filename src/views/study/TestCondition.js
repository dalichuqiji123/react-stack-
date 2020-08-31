import React from 'react'
export default class TestCondition extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:'ture',
            count:1,
            dis:'none'
        }
    }
    countchange(){
        let {count} = this.state
        let ele=''
        switch (count){
            case 1:
                ele=<h2>11111</h2>
                break
            case 2:
                ele=<h2>22222</h2>
                break
            case 3:
                ele=<h2>33333</h2>
                break
            case 4:
                ele=<h2>44444</h2>
                break
            case 5:
                ele=<h2>55555</h2>
                break
                default:
                ele=<h2>'没有东西了'</h2>
        }
        return ele
    }
    clickchange(){
        this.setState({
            count:this.state.count+1
        })
    }
    clickdis(){
        let {dis} = this.state
        if(dis=='none'){
            this.setState({
                dis:'block'
            })
        }else{
            this.setState({
                dis:'none'
            })
        }
    }
    render(){
      
        let {msg,dis} = this.state
        return (
            <div>
                {msg='true' && <h1>111111</h1>}
                {<button onClick={this.clickchange.bind(this)}>{this.countchange()}</button>}
                {this.countchange()}
                <button onClick={this.clickdis.bind(this)}>{'display'}</button>
                <div style={{display:dis}}>{this.countchange()}</div>
            </div>
        )
    }
}