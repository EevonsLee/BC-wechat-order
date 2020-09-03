import React, { Component } from 'react'
import {

    Route,
    Switch

} from "react-router-dom"
import lazy from "../../routes/lazy.jsx"
const A = lazy(() => import("./a.jsx"));
const B = lazy(() => import("./b.jsx"))


 const Index=(props)=>{
    return <div>
        <h3>pc页面</h3>
        {props.children}
    </div>
}


export default function PCRouter() {
    return <Index>
        <Switch>
            <Route path='/pc/a' component={A} />
            <Route path='/pc/b' component={B} />
        </Switch>
    </Index>
}
