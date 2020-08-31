import React from 'react'
export default class Checkbox extends React.Component{
    constructor(props){
        super(props)
    }
    valChange(id,e){
        let {value} = this.props
        if(e.target.checked){
            value.push(parseInt(id))
        }else{
            value=value.filter(ele=>ele!=parseInt(id))
        }
        this.props.onChange(value)
    }
    Checkbox(){
        let {options, value}=this.props
        let arr=[]
        options.map(ele=>{
            if(value.includes(ele.id)){
                ele.checked=true
            }else{
                ele.checked=false
            }
            arr.push(
                <span key={ele.id}>
                <input
                    type='checkbox'
                    value={ele.id}
                    checked={ele.checked}
                    onChange={this.valChange.bind(this,ele.id)}
                > 
                </input>
                {ele.title}
            </span>
            )
        })
        return arr
    }
    render(){
        return (
            <div>
                <h1>这是checkbox多选框封装</h1>
                {this.Checkbox()}
            </div>
        )
    }
}