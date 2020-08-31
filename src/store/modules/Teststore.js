import React from 'react'
import {inject ,observer} from 'mobx-react'//mobx-react用于将mobx和react组件连接起来的工具
@inject('store')//向组件里面注入stroe，后续就可以使用this.props.store
@observer//修饰组件用的，作用类似于高阶组件。
class Teststore extends React.Component{

    componentDidMount(){
        console.log(this.props)
    }
    countChange(arg){
        let count=this.props.store.Countstore
        if(arg=='add'){
            count.addcount(100)
        }else{
            count.subcount(50)
        }
    }
    render(){
        return (
            <div className='Teststore' style={{textAlign:"center"}}>
                <h1>{'测试状态管理'}</h1>
                <h2>{this.props.store.Countstore.count}</h2>
                <button onClick={this.countChange.bind(this,'add')}>加</button>
                <button onClick={this.countChange.bind(this)}>减</button>
            </div>
        )
    }
}
export default Teststore