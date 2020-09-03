import React, { Component } from "react"

import Cclass from "./Cclass.jsx"
import Cfunction from "./Cfunction.jsx"

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
        {/* <Cclass /> */}
        <Cfunction />
    </div>
    

  }
}


export default App