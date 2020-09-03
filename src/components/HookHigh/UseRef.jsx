import React, { useRef,useEffect } from "react"

function App(){
    const ref=useRef()
    
    useEffect(() => {
        ref.current.focus()
    }, []);

    return <div>
        useRef
        <input type="text" ref={ref}/>
    </div>
}

export default App