import React, { Component } from 'react'

class Styles extends Component{
    state={
        type:true,
        name1:"zhangsan",
        name2:"lisi"
    }
    change=()=>{
        this.setState({
            type:!this.state.type
        })
    }
    render(){
        let ren=null
        if(this.state.type){
            ren=this.state.name1
        }else{
            ren=this.state.name2
        }

        return <div>
            <p>

                {/* {this.state.type&&this.state.name1} */}
                {/* {this.state.type||this.state.name1} */}
                {/* {this.state.type?this.state.name1:this.state.name2} */}
                {ren}
            </p>
           
            <button onClick={this.change}>按钮</button>
        </div> 
    }

}

export default Styles