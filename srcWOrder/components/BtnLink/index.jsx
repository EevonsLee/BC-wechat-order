import React, { } from 'react'
import styles from "./index.module.less"


const BtnLink = (props) => {
    let { icon, style = {}, cb } = props
    return <p className={styles.btn} style={style} onClick={cb}>
        <i className={"iconfont " + icon}></i>
        <span>{props.children}</span>
    </p>
}



export default BtnLink