import React, { useReducer, useState } from "react"

function App(){
    const [state,dispatch]=useReducer((state,action)=>{
        const {type,val=1}=action
        switch(type){
            case "-":{
                return Object.assign({},state,{num:state.num-val})
            }
            case "+":{
                return Object.assign({},state,{num:state.num+val})
            }
            default: {
                return state
            }
        }
    },{num:0,name:"lisi"})


    return <div>
        useReducer:

        {
            state.num  
        } -------
        {
            state.name
        }
        <button onClick={()=>{
            dispatch({type:"+"})
        }}>增加</button>
        <button onClick={()=>{
            dispatch({type:"-"})
        }}>减少</button>

        <Child dispatch={dispatch}/>
    </div>
}



function Child(props){
    return <div>
        <button onClick={()=>{
            props.dispatch({type:"+",val:5})
        }}>子组件增加num</button>
    </div>
}

export default App