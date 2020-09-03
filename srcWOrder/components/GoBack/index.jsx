import React, { Component } from 'react'
import styles from "./index.module.less"
export default (props)=>{
    const {history,style}=props
    return <p className={styles.goback} style={style} onClick={()=>{history.go(-1)}}>
        <i className="iconfont icon-return"></i>
<span>{props.children}</span>
    </p>
}