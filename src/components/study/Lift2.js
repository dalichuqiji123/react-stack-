import React from 'react'
import PropTypes from 'prop-types'
export default class Lift2 extends React.Component{
    render(){
        let {msg}=this.props
        return (
            <div>
                 <h1>测试状态提升</h1>
                 {msg}
            </div>
        )
    } 
}
Lift2.propTypes={msg:PropTypes.string}