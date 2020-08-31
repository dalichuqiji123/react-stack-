import React from 'react'
import { inject, observer } from 'mobx-react'
@inject('store')//注入store，就可以使用this.props.store来使用store银行里面的数据了
@observer//修饰器类似与高阶组件。
class Testtodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: '',
        }
    }
    Addtodo(e) {
        if (e.keyCode == 13&&e.target.value!='') {
            let { Todostore } = this.props.store
            let params = {
                id: Date.now(),
                task: e.target.value
            }
            Todostore.Addtodo(params)
            this.setState({ task:''})
        }
    }
    taskChange(arg,e) {
        if (arg == 'add') {
            this.setState({ task: e.target.value })
        }else{
            let { Todostore } = this.props.store
            let params = {
            idx:arg,
            task:e.target.value
        }
        Todostore.Uptodo(params)
        }
    }
    componentDidMount() {
        let { Todostore } = this.props.store
        Todostore.getusers()
        // 打印this.props你就会发现不仅仅有history一系列方法，还有所有store中的子银行，如果想用子银行里面的
        //数据或者方法那么就可以使用this.props.store.Todostore，这样Todostore里面所有的数据和方法都可以用了。
        console.log(this.props)
    }
    Removetodo(idx){
        let { Todostore } = this.props.store
        Todostore.Deltodo(idx)
    }
    cleartodo(){
        let { Todostore } = this.props.store
        Todostore.clear()
    }
    createList() {
        let { Todostore } = this.props.store
        return Todostore.list.map((ele,idx) => (
            <div key={ele.id} className='bottom-input'>
                <span>{ele.id}</span>
                <span>--</span>
                <input value={ele.task}
                    onChange={this.taskChange.bind(this,idx)}
                />
                <button onClick={this.Removetodo.bind(this,idx)}>删除</button>
            </div>
        ))
    }
    getusers(){
        let { Todostore } = this.props.store
        return Todostore.userlist.map(ele=>(
            <div key={ele._id} className='users'>
                <span>{ele._id}</span>
                <span>--</span>
                <span>{ele.username}</span>
            </div>
        )
        )
    }
    render() {
        let { task } = this.state
        return (
            <div className='todolist'>
                <h1>{'任务列表'}</h1>
                <input value={task}
                className='top-input'
                    onChange={this.taskChange.bind(this, 'add')}
                    onKeyUp={this.Addtodo.bind(this)}
                />
                <div className='bottom'>
                    {this.createList()}
                </div>
                <button className='btn' onClick={this.cleartodo.bind(this)}>清除</button>
                <hr />
                <div>
                    {this.getusers()}
                </div>
            </div>
        )
    }
}
export default Testtodo