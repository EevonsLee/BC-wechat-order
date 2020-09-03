import React, { Component } from 'react'
let num=1
let curName=null
let time=null
class Root extends Component{
    constructor(props){
        super(props)
        curName=props.names
        console.log("constructor")
    }
    componentWillMount(){
        console.log("componentWillMount")
        // console.log(document.querySelector("p"))
        num=2
    }
    render(){
        console.log("render")
        return <div>{curName}<p>你好</p>{num}</div> 
    }
    componentDidMount(){
        // num=3
        //1、定时任务
        //2、插件的实例化
        //3、事件的监听
        //4、网络的请求
        // console.log(document.querySelector("p"))
        console.log("componentDidMount")
        time=setInterval(()=>{
            console.log(document.querySelector("p"))
        },1000)
    }

    componentWillReceiveProps(nextProps){
        // props,state
        console.log("componentWillReceiveProps",nextProps,this.props)
        curName=nextProps.names
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps)
        return nextProps.names!==this.props.names
    }
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
        clearInterval(time)
    }

}

export default Root