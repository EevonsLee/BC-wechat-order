import React, { Component } from "react"

import Child1 from "./child1"
import Child2 from "./child2"
import event from "../../utils/tool.js"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: null
    }


    // event.$on("up",this.cb)
  }

  // cb=(data)=>{
  //   console.log(data)
  //   this.setState({
  //     num:data
  //   })
  // }

  componentDidMount() {
    this.setState({
      num: sessionStorage.getItem("num")
    })

  }
  render() {
    return <div>
      <span>parent:{this.state.num}</span>
      {/* <Child1 cb={this.cb}/> */}
      <Child1 />
      {/* <Child2 num={this.state.num}/> */}
      <Child2 />
    </div>
  }


}
export default App