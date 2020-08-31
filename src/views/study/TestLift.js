import React from 'react'
import {Lift1,Lift2} from '@/components'
export default class TestLift extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:''
        }
    }
    onChange(arg){
        this.setState({msg:arg})
    }
    render(){
        let {msg}=this.state
        return (
            <div>
                <Lift1 value={msg} onChange={this.onChange.bind(this)}/>
                <hr></hr>
                <Lift2 msg={msg}/>
            </div>
        )
    }
}