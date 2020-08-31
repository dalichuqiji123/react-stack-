import React from 'react'
import routes from '@/views'
//安装react-router-dom并且从他里面引入一系列方法
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
class Main extends React.Component {
    // componentDidMount() {
    //     console.log(this.props)
    // }
    creactlist() {
        let arr = []
        routes.map(ele => {
            arr.push(
                // Route就是路由的配置，path和component相当于vue中router.js中的配置
                <Route
                    key={ele.id}
                    path={ele.path}//匹配的路径
                    exact//精准匹配不仅仅是匹配之前就可以匹配成功。
                    component={ele.component}//匹配的组件
                >
                </Route>
            )
            if (ele.children) {
                ele.children.map(ele => {
                    arr.push(
                        <Route
                            key={ele.id}
                            path={ele.path}
                            exact
                            component={ele.component}
                        >
                        </Route>
                    )
                })
            }
        }
        )
        return arr
    }
    render() {
        return (
            <div className='lo-Main'>
                {/* Switch用于匹配，匹配到了第一个就不会继续去匹配后面的所以重定向必须写最后面不然就只会匹配重定向的了 */}
                <Switch>
                    {this.creactlist()}
                    <Redirect from='/*' to="/TestJsx" />
                </Switch>
            </div>
        )
    }
}
//withRouter：一般this.props中的一系列方法例如：history,go,goback()都是要当前组件包裹在Route中才能使用所以为了方便，不仅仅是
//包裹才能使用的所以就有了withRouter，经过这个方法处理过的组件里面也会有this.props里面的一系列方法。
export default withRouter(Main)