import React from 'react'
export default function Child1 (props){
    return (
    <div>
        <h1>{props.aaa}</h1>
        <h1>{props.bbb}</h1>
        <h2>{props.children}</h2>
    </div>
    )
}