import React, { Component } from "react"

class A extends Component{

  render(){
    return <div ref="name">小明</div>
  }
}

function B(){
  return <div>小李</div>
}


class App extends Component {
  constructor(props) {
    super(props)
    this.inputR=React.createRef()
    this.divR=React.createRef()
    this.B=React.createRef()
  }
  componentDidMount(){
    this.inputR.current.focus()
    console.log(this.divR.current)
    console.log(this.B.current)
  }

  render() {
    return <div>
      <h3>class类组件</h3>
      <input type="text" ref={this.inputR}/>
      <A ref={this.divR}/>
      {/* <B ref={this.B}/> */}
    </div>
  }
}


export default App