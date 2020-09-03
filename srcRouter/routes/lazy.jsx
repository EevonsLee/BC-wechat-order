import React, { Component } from 'react'


export default function(importCom){
    return class extends Component{
       state={
           Com:null
       }
       async componentDidMount(){
           let {default:Com}=await importCom()
           this.setState({
               Com:Com
           })
       }

        render(){
            const Com=this.state.Com
            return Com?<Com {...this.props} />:null
        }
    }
}