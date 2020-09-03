import React, {  } from 'react'
import List from "./List/index.jsx"
import Hotlist from "./Hotlist/index.jsx"
import Search from "./Search/index.jsx"
import Detail from "./Detail/index.jsx"

const Welcome=(props)=>{
    return <>
        {props.children}
    </>
}

const RenderRouter=()=>{
    return <Welcome>
        <List />
        <Hotlist />
        <Search />
        <Detail />
    </Welcome>
}


export default RenderRouter