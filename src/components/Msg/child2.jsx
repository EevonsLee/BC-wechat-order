import React, { Component } from 'react';
import event from "../../utils/tool.js"
class Msg extends Component {
    constructor(props) {
        super(props);
        event.$on("up", this.cb)
    }

    cb = (data) => {
        console.log(data)
        this.setState({
            num: data
        })
    }
    state = {
        num: null
    }
    componentDidMount() {
        // this.setState({
        //   num: sessionStorage.getItem("num")
        // })

    }
    render() {
        return (
            <div>
                通讯子组件2
                {/* <p>数据来源于parent{this.props.num}</p> */}
                <p>数据来源于child1{this.state.num}</p>
            </div>
        );
    }
}

export default Msg;