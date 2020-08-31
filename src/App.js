//定义一个react组件
import React from 'react';
import 'antd/dist/antd.css'
import {HashRouter} from 'react-router-dom'
import Layout from './components/layout/Layout';
//引入Provider方法作用是让全局都可以使用store里面的数据
import {Provider} from 'mobx-react'
//引入总银行，所以里面的分银行自然而然也过来了
import Store from './store/index';
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            //这不是div标签这是jsx语法写的对象
            <div className='hehe'> 
            {/* HashRouter就相当于vue里面的hash一般就是地址栏会有#号 */}
            <HashRouter>
                {/* 通过Provider就可以让Layout使用Store银行里面的数据了 */}
                <Provider store={Store}>
                    {/*在Layout中通过this.props.store就可以拿到数据了 */}
                    <Layout />
                </Provider>
            </HashRouter>
            </div>
        );
    }
}
