import React from 'react'
export default class TestList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { id: 1, name: '李白' },
                { id: 2, name: '韩信' },
                { id: 3, name: '猴子' },
                { id: 4, name: '守约' },
                { id: 5, name: '玄策' },
            ]
        }
    }
    showList() {
       let {list} = this.state
       return list.map(ele => (
        <span key={ele.id}>
            {ele.name}
        </span>
    ))
    }
    showList2(){
        let {list} = this.state
        let arr=[]
        list.map((ele)=>{
            ele.grold='1'
            arr.push(
                <span key={ele.id}>
            {ele.grold}
        </span>
            )
        })
        return arr
    }
    render() {
        let { list } = this.state
        let list2= list.map(ele => (
            <span key={ele.id}>
                {ele.name}
            </span>
        ))
        {this.showList()}
        return (
            <div>
                {list.map(ele => (
                    <span key={ele.id}>
                        {ele.name}
                    </span>
                ))}
                {list2}
                {this.showList()}
                {this.showList2()}
            </div>
        )
    }
}