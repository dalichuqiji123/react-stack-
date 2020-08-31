import React from 'react'
import Hoc from '@/utils/Hoc'
class TestHoc extends React.Component{
    render (){
        return (
            <div>
                <h1>{'高阶组件测试'}</h1>
                <h2>{this.props.msg}</h2>
            </div>
        )
    }
}
export default Hoc(TestHoc)
//高阶组件就是封装一个函数然后，传入的参数是一个组件，返回的值也是一个组件，就相当于把一个组件给修饰，加工了一下。
//例如我这里就是通过Hoc这个函数把TestHoc组件给加工了一下，给TestHoc这个组件加了两条数据，并且TestHoc中的msg都是接收字Hoc这个
//封装函数中的，有点父子组件传参内味了。
