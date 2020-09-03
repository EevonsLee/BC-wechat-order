import React, { useEffect, useState } from "react"

function A(){
    const [num,setNum]=useState(0)
    useEffect(()=>{
        let time=setInterval(()=>{
            console.log(1)
        },1000)

        return ()=>{
            clearInterval(time)
        }
    },[])
    return <div>
        {num}
    </div>
}


function App() {
    const [name, putName] = useState("lisi")
    const [age, putAge] = useState(()=>{
        // console.log(11)
        return 23
    })

    const [state,putState]=useState(true)
    
    useEffect(()=>{
        console.log("age改变了")
        // putName("wangwu")
    },[age])

    return <div>
        <h3>hooks基础</h3>
        <p>{name}</p>
        <p>{age}</p>
        <button onClick={()=>{putName("zhangsan");putAge(34)}}>改变</button>
        {/* <button onClick={()=>{putState(false)}}>改变</button> */}

        {/* {state?<A></A>:null} */}
    </div>
}


export default App