import React, { Component } from 'react'
import A from "./A.jsx"
import B from "./B.jsx"
const style={
    p:{
        color:"red"
    }
}
class Styles extends Component{
    render(){
        return <div>
            <A />
            <B />
            <p style={style.p}>内部样式</p>
        </div> 
    }

}

export default Styles