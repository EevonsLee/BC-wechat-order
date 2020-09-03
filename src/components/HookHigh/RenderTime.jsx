import React, { useEffect, useState } from "react"
import Time from "./time.jsx"
function App(){
    const [time,setTime]=useState(0)
    const cb=(time)=>{
        setTime(time)
    }
    Time(cb)
    return <div>
        自定义钩子函数
        当前时间戳：{time}
    </div>
}

export default App