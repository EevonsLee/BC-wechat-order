import React, { Component } from 'react';
import event from "../../utils/tool.js"
class Msg extends Component {
    constructor(props) {
        super(props);
        // this.props.cb(this.state.num)
        // event.$emit("up",this.state.num)
        sessionStorage.setItem("num",this.state.num)
    }
    componentDidMount(){
        event.$emit("up",this.state.num)
    }
    state={
        num:10
    }
    render() { 
        return (  
            <div>
                通讯子组件1
                 <p></p>
            </div>
        );
    }
}
 
export default Msg;