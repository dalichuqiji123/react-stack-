import React from 'react'
import { Aside, Main } from './index'
import './style.scss'//引入样式不然就没有样式了
export default class Layout extends React.Component {
    render() {
        return (
            <div className='layout'>
                <Aside>

                </Aside>
                <Main>

                </Main>
            </div>
        )
    }
}