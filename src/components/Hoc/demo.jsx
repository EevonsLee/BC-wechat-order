import React, { Component } from "react"
import HocSort from "./HocSort.jsx"
import HocGetData from "./HocGetData.jsx"

class App extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return <ul>
        {this.props.list.map((item,index)=>{
            return <li key={index}>{item.name}--{item.age}</li>
        })}
    </ul>
  }
}


export default HocGetData(HocSort(App))