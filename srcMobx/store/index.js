import {decorate,observable,action,computed,autorun} from "mobx";

class TodoList{
    todos=[]
    get getLength(){
        return this.todos.filter((item)=>item.state).length
    }
    add=action(()=>this.todos.push({id:Math.random(),title:"lisi",state:false}))
}

decorate(TodoList,{
    todos:observable,
    getLength:computed
})

let store=new TodoList()

autorun(()=>{
    // console.log("副作用执行了")
    setTimeout(()=>{
        store.add()
    },2000)
})

export default store