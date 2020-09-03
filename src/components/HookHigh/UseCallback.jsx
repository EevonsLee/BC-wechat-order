import React, { useCallback, useState } from "react"

function App(){
    const [price,setPrice]=useState(5)
    const [num,setNum]=useState(10)
    
    const total=useCallback(()=>{
        return price*num
    },[num])
    
    const B=useCallback(()=>{
        return <b>{num}</b>
    },[num])
  
    return <div>
        useCallback

        <p>
            {B()}
            总价:{total()}
        </p>
        <button onClick={()=>{
            setNum(20)
        }}>数量为20</button>
    </div>
}

export default App