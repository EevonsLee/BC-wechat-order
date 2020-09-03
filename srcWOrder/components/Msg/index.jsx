import React, { } from 'react'
import styles from "./index.module.less"
import { dialog } from "../../store"
import { observer } from "mobx-react"

const Msg = observer((props) => {
    let { msg, type, show } = props.dialog
    return show ? <div className={styles.msg}>
        <main>
            <i className={type=="success"?"iconfont icon-prompt_fill "+styles.success:"iconfont icon-prompt_fill "+styles.error}></i>
            <h2>{msg}</h2>
        </main>
    </div> : null
})

window.alert = (msg, type, time = 1000) => {
    dialog.change({msg,type,show:true})
    setTimeout(()=>{
        dialog.change({msg:"",type:"",show:false})
    },time)
}

export default () => <Msg dialog={dialog} />