import React, { Component } from 'react'
class Data extends Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            name:props.name
        })
    }
  
    render(){
        console.log("render")
        return <div>{this.state.name}<p>{this.state.age}</p></div> 
    }
    componentDidMount(){
        // this.state.name="zhangsan"
        // setTimeout(()=>{
        //     this.setState({
        //         name:"wangwu"
        //     })
        //     // this.props.name="wangwu"

        // },1000)
       
    }

}

export default Data