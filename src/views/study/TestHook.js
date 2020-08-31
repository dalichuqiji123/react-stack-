import React,{useState,useEffect} from 'react'
export default function TestHook(){
    let [count,setCount]= useState(1)
    let [list,setList]=useState([])
    let time=null
    useEffect(()=>{
        time=setInterval(()=>{
            console.log("mounted")
            count++
            list=[1,2,3,4]
            setCount(count)
            setList(list)
        },1000)
        return ()=>{
            clearInterval(time)
            console.log('componentWillUnmount')
        }
    })
    function btnClick(){
        count++
        setCount(count)
    }
    function stopClick(){
        clearInterval(time)
    }
    function creatlist(){
        return list.map(ele=>
            <li key={ele}>{ele}</li>
        )
    }
    useEffect(()=>{
        console.log('componentDidUpdate')
        return undefined
    },[count])
    return (
        <div className='Hook' style={{textAlign:'center'}}>
            <h1>{'Hook测试'}</h1>
            <h2>{count}</h2>
            <button onClick={btnClick}>点击</button>
            <button onClick={stopClick}>停止</button>
            <div>
                {creatlist()}
            </div>
        </div>
    )
}
//Hook就是让无状态组件能拥有类组件的状态和生命周期。