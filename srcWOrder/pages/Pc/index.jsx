import React, {  } from 'react'
import Index from "./Index/index.jsx"
import Msg from "./Msg/index.jsx"
import OrderList from "./OrderList/index.jsx"
import OrderListEvaluate from "./OrderListEvaluate/index.jsx"
const Pc=(props)=>{
    return <>
        {props.children}
    </>
}
const RenderRouter=()=>{
    return <Pc>
        <Index />
        <Msg />
        <OrderList />
        <OrderListEvaluate />
    
    </Pc>
}
export default RenderRouter