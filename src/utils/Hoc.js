import React from 'react'
function Hoc(WrappedComponent){
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state={
                msg:'我段勇鹏无敌不服来战！！！',
                user:''
            }
        }
        componentDidMount(){
            let user=localStorage.getItem('user')
            this.setState({user})
        }        
        render(){
            return (
                <div>
                    <WrappedComponent msg={this.state.msg}/>
                    <h1>hco content</h1>
                    <h1>{'啦啦啦啦啦'}</h1>
                </div>
            )
        }
    }
}
export default Hoc
//高阶函数的封装就是封装一个函数给其他组件调用用来改变这个组件的数据。上面就是封装的一个组件的案例。