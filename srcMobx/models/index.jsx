import React,{useState} from "react"
import store from "../store/index.js"
import {observer} from "mobx-react"
// import {autorun} from "mobx"
import Item from "../components/Item.jsx"

const App= observer((props)=>{
    console.log(store)
    // 错误写法
    // const [todos,setTodos]=useState(store.todos)
    const add=()=>{
        // props.store.add();
        store.todos.push({
            id:Math.random(),
            title:"zhangsan",
            state:false
        })
    }
    return <div>
        <h2>首页</h2>
        {
            props.store.todos.map((item)=>{
            return <Item item={item} key={item.id}/>
            })
        }
        数组中的数据为true的数量:
        {
            props.store.getLength
        }
        <button onClick={add}>add</button>
    </div>
})



export default ()=><App store={store} />