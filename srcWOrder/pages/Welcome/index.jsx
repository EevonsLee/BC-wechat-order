import React, {  } from 'react'
import Shop from "./Shop/index.jsx"
import SelectPeople from "./SelectPeople/index.jsx"
const Welcome=(props)=>{
    return <>
        {props.children}
    </>
}

const RenderRouter=()=>{
    return <Welcome>
        <Shop></Shop>
        <SelectPeople></SelectPeople>
    </Welcome>
}
// http://localhost:3000/?shopId=b9a5eea53c8d4f154174dbff53892e24&userId=2a6cbc6c27114fdda4045af8550dd666&tableNum=45#/

export default RenderRouter