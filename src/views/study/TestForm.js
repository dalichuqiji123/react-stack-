import React from 'react'
//受控表单必须包含value和onChange事件。
//官方不建议使用非受控表单，除了唯一一个被官方支持非受控表单就是文件上传表单
export default class TestForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            adr:'',
            src:"http://localhost/imgs/1.png",
            fav:'2',
            info:{
                Myname:"",
                Mypass:'',
                Myphone:'',
                Myfav:'',
                Myagree:false,
                Mysex:2
            }
        }
    }
    nameChange(e){
        this.setState({name:e.target.value})
    }
    submit(){
        let data={
            name:this.state.name,
            pass:document.getElementById('pass').value,
            phone:this.refs.box.value,
            adr:this.state.adr,
            src:this.state.src,
            fav:this.state.fav,
        }
        console.log(data)
    }
    adrChange(e){
        this.setState({adr:e.target.value})
    }
    favChange(e){
        this.setState({fav:e.target.value})
    }
    // 只是用下面两种就可以实现表单传值无论是有多少个表单只需要两个方法。
    myChange(k,e){
        let {info} = this.state
        if(k=='Myagree'){
            info[k]=e.target.checked
        }else {
            info[k]=e.target.value
        }
        this.setState({info:info})
    }
    submit2(){
        let data = {
            info:this.state.info
        }
        console.log(data)
    }
    render(){
        let {name,fav,info}=this.state
        return (
            <div>
                <h1>测试表单</h1>
                {/* 受控表单,与state紧紧相关*/}
                <input
                    value={name}
                    onChange={this.nameChange.bind(this)}
                >
                </input><br/>
                {/* 非受控表单，与state没任何关系 */}
                <input id="pass" type='text'></input><br/>
                <input ref="box" type='text'></input><br/>
                <input onInput={this.adrChange.bind(this)}></input><br/>
                {/* 唯一一个官方支持使用的非受控表单 */}
                <input type='file'></input><br/>
                <select value={fav} onChange={this.favChange.bind(this)}>
                    <option value='1'>音乐</option>
                    <option value='2'>电影</option>
                    <option value='3'>游戏</option>
                </select>
                <button onClick={this.submit.bind(this)}>提交</button>
                <hr/>
                <span>
                    <input value={info.Myname} onChange={this.myChange.bind(this,'Myname')} type='text'></input>
                </span>
                <br/>
                <span>
                    <input value={info.Mypass} onChange={this.myChange.bind(this,'Mypass')} type='text'></input>
                </span>
                <br/>
                <span>
                    <input value={info.Myphone} onChange={this.myChange.bind(this,'Myphone')} type='text'></input>
                </span>
                <br/>
                <span>
                <select value={info.Myfav} onChange={this.myChange.bind(this,'Myfav')}>
                    <option value='1'>音乐</option>
                    <option value='2'>电影</option>
                    <option value='3'>游戏</option>
                </select>
                </span>
                <br/>
                <span>是否同意协议：</span>
                <input value={info.Myagree} onChange={this.myChange.bind(this,'Myagree')} type='checkbox'></input><br/>
                <span>您的性别是：</span>
                <input 
                    value='1'
                    checked={info.Mysex=='1'}
                    type='radio' 
                    onChange={this.myChange.bind(this,'Mysex')}>
                </input><label>男</label>
                <input 
                    value='2'
                    checked={info.Mysex=='2'}
                    type='radio' 
                    onChange={this.myChange.bind(this,'Mysex')}>
                </input><label>女</label>
                <button onClick={this.submit2.bind(this)}>提交</button>
            </div>
        )
    }
}