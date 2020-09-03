import React, { Component } from 'react'
import Child from "./child"
class Parent extends Component{
   

    state={
        name:"lisi",
        age:23
    }

    render(){
        console.log("render")
        return <div><Child name={this.state.name}/></div> 
    }
    componentDidMount(){
        // this.state.name="zhangsan"
        setTimeout(()=>{
            this.setState({
                name:"zhangsan"
            })

        },1000)
       
    }

}

export default Parent