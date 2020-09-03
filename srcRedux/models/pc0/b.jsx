import React, { useState ,useEffect} from 'react'
import Store,{actions} from "../../store/index"
export default function(){
    console.log(Store.getState())
    
    const [num,setNum]=useState(Store.getState().num)

    useEffect(() => {
        let listen=Store.subscribe(()=>{
            setNum(Store.getState().num)
        })
        return () => {
            listen()
        };
    }, []);
    return <div>
        <h5>B组件</h5>
            <p>{num}</p>
            <button onClick={()=>Store.dispatch(actions.add())}>add</button>
        </div>
    
}
