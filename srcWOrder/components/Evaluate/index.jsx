import React, { useState } from 'react'
import styles from "./index.module.less"
export default (props)=>{

    const change=(num)=>{
        let result=props.defaultV+num
        props.getScore(result)
    }

    return <p className={styles.evaluate}>
        {
            Array.from(new Array(5)).map((i,index)=>{
                if(index<props.defaultV){
                    return <i className="iconfont icon-collection_fill" onClick={()=>change(-1)}></i>
                }else{
                    return <i className="iconfont icon-collection"  onClick={()=>change(1)}></i>
                }
               
            })
        }
    </p>
}