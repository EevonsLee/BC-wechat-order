import React, { } from 'react'
import styles from "./index.module.less"


const SearchBtn = (props) => {
    let { icon,style={},cb} = props
    return <p className={styles.searchBtn} style={style} onClick={cb}>
        <i className={"iconfont "+icon}></i>
    </p>
}



export default SearchBtn