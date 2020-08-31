import React from 'react'
export default class Detail extends React.Component{
    render(){
        console.log(this.props.match.params)
        return (
           
            <div style={{textAlign:"center"}}>
                <h1>{'商品详情页'}</h1>
                <h1>{this.props.match.params.id}</h1>
                <h2>{this.props.match.params.name}</h2>
            </div>
        )
    }
}