import React from 'react'
//从views中引入好多对象
import routes from '@/views'
//安装react-router-dom并且从他里面引入NavLink就相当于vue中的router-link
import { NavLink } from 'react-router-dom'
export default class Aside extends React.Component {
    creactlist() {
        return routes.map(ele =>
            <div key={ele.id}>
                <NavLink to={ele.path}
                activeClassName='on'
                >{ele.name}</NavLink>
            </div>
        )
    }
    render() {
        return (
            <div className='lo-Aside'>
                {this.creactlist()}
            </div>
        )
    }
}