import {observable ,action} from 'mobx'
//引入observable，action。用于定义变量和方法。
export default  class Countstore {
    @observable count =1
    @action addcount(payload){
        this.count+=payload
    }
    @action subcount(payload){
        this.count-=payload
    }
}