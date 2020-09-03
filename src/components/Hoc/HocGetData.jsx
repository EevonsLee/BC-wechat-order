import React, { Component } from "react"

function HocGetData(Com){
    return class extends Component{
      constructor(props){
        super(props)
        this.state={
          loading:true,
          list:[]
        }
      }
      componentDidMount(){
        setTimeout(()=>{
          this.setState({
            loading:false,
            list:[{
              name:"zhangsan",
              age:34
            },{
              name:"lisi",
              age:23
            },{
              name:"wangwu",
              age:43
            }]
          })
        },2000)
      }
      render(){
        return this.state.loading?<p>加载中。。。</p>:<Com list={this.state.list}/>
      }
    }
}

export default HocGetData