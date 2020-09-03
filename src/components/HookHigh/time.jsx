import React, { useEffect, useState } from "react"

function Time(cb){
    const [time,setTime]=useState(new Date().getTime())
   
    useEffect(()=>{
        cb(time)
        let time1=setTimeout(()=>{
            setTime(new Date().getTime())
        },1000)
        return ()=>{
            clearTimeout(time1)
        }
    })
}

export default Time