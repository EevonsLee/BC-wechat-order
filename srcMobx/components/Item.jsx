import React,{useState} from "react"


const App= (props)=>{
    const {item}=props
    return <div>
<p>{item.title}</p>
            <input type="checkbox" checked={item.state} onChange={()=>{
                item.state=!item.state
            }}/>
    </div>
}



export default App