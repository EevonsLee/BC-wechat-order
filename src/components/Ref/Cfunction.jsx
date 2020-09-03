import React, { useEffect } from "react"


function App() {
  let inputR=React.createRef()
  useEffect(()=>{
    inputR.current.focus()
  },[])
  return <div>
    <h3>函数组件</h3>
    <input type="text" ref={inputR}/>
  </div>
}



export default App