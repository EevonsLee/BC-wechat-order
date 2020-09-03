import React, { Component } from 'react'
import Store,{actions} from "../../store/index"
export default (props)=>{
    console.log(props)
    return <div>
        <h5>a页面</h5>
        <button onClick={()=>Store.dispatch(actions.add())}>add</button>
        </div>
}