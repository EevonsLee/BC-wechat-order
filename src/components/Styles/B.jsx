import React, { Component } from 'react'
import style from "./B.module.css"
class Parent extends Component{

    render(){
        return <div className={style.com}>
            B组件
        </div> 
    }

}

export default Parent