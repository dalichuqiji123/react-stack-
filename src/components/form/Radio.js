import React from 'react'

export default class Radio extends React.Component{
    constructor(props){
        super(props)
    }
    likeChange(id){
        this.props.onChange(id)
    }
    RadioChange(){
        let {options,value}=this.props
        return options.map(ele=>
            <span key={ele.id}>
                <input
                    type='radio'
                    checked={ele.id==parseInt(value)}
                    value={ele.id}
                    onChange={this.likeChange.bind(this,ele.id)}
                >
                </input>
                {ele.title}
            </span>
        )
    }
    render(){
        return (
            <div>
                <h1>这是单选框封装</h1>
                {this.RadioChange()}
            </div>
        )
    }
}