import React from 'react'
import {Checkbox} from '@/components/index'
import {Radio} from '@/components/index'
export default class Check extends React.Component{
    constructor(props){
        super(props)
        this.state={
            favarr:[
                {id:1,title:'羽毛球'},
                {id:2,title:'足球'},
                {id:3,title:'乒乓球'},
                {id:4,title:'篮球'},
                {id:5,title:'棒球'},
            ],
            fav:[1,3,5],
            unlike:[
                {id:1,title:"读书"},
                {id:2,title:"写字"},
                {id:3,title:"代码"},
                {id:4,title:"工作"},
            ],
            un:1
        }

    }
    favChange(val){
        this.setState({fav:val})
    }
    unLike(val){
        this.setState({un:val})
    }
    render(){
        return (
            <div>
                <Checkbox 
                    options={this.state.favarr}
                    value={this.state.fav}
                    onChange={this.favChange.bind(this)}
                />
                <Radio
                    options={this.state.unlike}
                    value={this.state.un}
                    onChange={this.unLike.bind(this)}
                ></Radio>
            </div>
        )
    }
}