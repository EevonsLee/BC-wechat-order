import React, { Component } from "react"

import Child1 from "./child1"
import Child2 from "./child2"

class App extends Component {
  constructor(props) {
    super(props)
   
  }

  render() {
    let a=<p>父节点定义的内容，通过p进行显示1</p>
    let b=<p>父节点定义的内容，通过p进行显示2</p>
    
    return <div>
      {/* <Child1>
        父节点定义的内容
      </Child1> */}
      <Child2 a={a} b={b}/>
    </div>
  }


}
export default App