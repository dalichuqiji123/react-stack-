import {action, observable} from 'mobx'
import fetchGetusers from '@/utils/api'
export default class Todostore{
    @observable userlist=[]
    @observable list = []
    @action Addtodo(payload){
        this.list.push(payload)
    }
    @action Deltodo(payload){
        this.list.splice(payload,1)
    }
    @action Uptodo(payload){
        this.list[payload.idx].task=payload.task
    }
    @action clear(){
        this.list=[]
    }
    @action getusers(){
        fetchGetusers().then(res=>{
            console.log(res)
            this.userlist=res.data.list
        })
    }
} 