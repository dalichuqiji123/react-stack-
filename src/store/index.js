//设置一个总的银行
import Countstore from './modules/Countstore'
import Todostore from './modules/Todostore'
class Store{
constructor(){
    this.Countstore=new Countstore()
    this.Todostore=new Todostore()
} 
}
export default new Store()