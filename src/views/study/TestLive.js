import React from 'react'
// 生命周期一共分三个阶段：挂载阶段，更新阶段，销毁阶段
export default class TestLive extends React.Component{
    constructor(props){
        super(props)
        // 挂载未完成(第一阶段第一个函数)
        this.state={
            count:1
        }
        console.log(constructor)
    }
    countChange(){
        let {count }=this.state
        count++
        this.setState({count})
    }
     // 很少用
        // static getDerivedStateFromProps() {
        //   console.log('getDerivedStateFromProps')
        //   return null//这个return必须要有不然的话就会报错
        // }
    //挂载完成：这个函数一般用来调接口，长连接，开启定时器。就相当于vue中的mounted(第一阶段第二个函数)
    componentDidMount(){
        console.log('componentDidMount')
    }
    //更新阶段
    //开关：控制视图是否更新，主要用于性能优化
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true//返回的是true就是试图会更新
    }
    //更新完成
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    /* 销毁阶段 */
    // 组件销毁之前，beforeDestroy
    // 清除定时器，清除长连接
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    //所有生命周期中都有必不可少，组件挂载，组件更新都会触发(这也是第一阶段第三个函数)
    render(){
        let {count} = this.state
        return (
            <div>
            <h1>生命周期</h1>
            <h2>{count}</h2>
            <button onClick={this.countChange.bind(this)}>改变count</button>
        </div>
        )
    }
}