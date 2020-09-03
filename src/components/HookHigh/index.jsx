import React, { Component } from "react"

import RenderTime from "./RenderTime.jsx"
import UseContext from "./UseContext.jsx"
import UseReducer from "./UseReducer.jsx"
import UseCallback from "./UseCallback.jsx"
import UseRef from "./UseRef.jsx"

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
        <h3>hook高级应用</h3>
        {/* <RenderTime /> */}
         {/* <UseContext /> */}
       {/* <UseReducer /> */}
       {/* <UseCallback /> */}
         <UseRef />
    </div>
  }
}


export default App