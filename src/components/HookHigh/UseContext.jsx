import React, { useContext, useState } from "react"

const MyContext = React.createContext()
function App() {
    const [txt, setTxt] = useState("lisi")

    setTimeout(() => {
        setTxt("zhangsan")
    }, 1000);
    return <MyContext.Provider value={txt}>
        <div>
            context钩子
            <Middle />
        </div>

    </MyContext.Provider>

}

function Middle() {
    return <div>
        <Base />
    </div>
}


function Base() {
   const context = useContext(MyContext);
    return <div>
        {context}
    </div>
}

export default App