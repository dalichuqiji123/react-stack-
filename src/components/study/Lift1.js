import React from 'react'
export default class Lift1 extends React.Component{
    onChildChange(e){
        this.props.onChange(e.target.value)
    }
    render(){
        let {value}=this.props
        return (
            <div>
                 <h1>测试状态提升</h1>
                 <input value={value} onChange={this.onChildChange.bind(this)} />
            </div>
        )
    }

}