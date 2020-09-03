import React, { Component } from 'react';
class Msg extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <div>
                子组件2
                {this.props.a}
                {this.props.b}
            </div>
        );
    }
}

export default Msg;