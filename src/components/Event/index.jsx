import React, { Component } from 'react'

class Styles extends Component{
    state={
        name:"zhangsan"
    }
    constructor(props){
        super(props)
        // this.change=this.change.bind(this)
    }
    // change(){
    //     console.log(this)
    //     this.setState({
    //         name:"lisi"
    //     })
    // }
    change=()=>{
        console.log(this)
        this.setState({
            name:"lisi"
        })
    }
    render(){
        return <div>
            <p>{this.state.name}</p>
            {/* <button onClick={this.change}>按钮</button> */}
            {/* <button onClick={()=>this.change()}>按钮</button> */}
            <button onClick={this.change}>按钮</button>
        </div> 
    }

}

export default Styles