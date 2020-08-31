import React from 'react'
export default class Child2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {id:1,title:'迪丽热巴'},
                {id:2,title:'诸葛大力'},
                {id:3,title:'邓紫棋'},
                {id:4,title:'欧阳娜娜'},
                {id:5,title:'李沁'},
            ]
        }
    }
    clicklang(id){
        this.props.onChange(id)
    }
    language(){
        let {lang}=this.props
        let {list}=this. state
        return list.map(ele=>
           <span
            className={lang==ele.id?'on':''}
           key={ele.id}
            onClick={this.clicklang.bind(this,ele.id)}
        >{ele.title}</span>
        )
    }
    render(){
        return (
            <div className='language'>
                {this.language()}
            </div>
        )
    }
}