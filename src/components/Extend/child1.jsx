import React, { Component } from 'react';

class Msg extends Component {
    constructor(props) {
        super(props);
       
    }
   
    render() { 
        return (  
            <div>
                子组件1
        <p>{this.props.children}</p>
            </div>
        );
    }
}
 
export default Msg;