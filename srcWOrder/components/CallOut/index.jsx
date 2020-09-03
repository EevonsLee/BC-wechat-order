import React, {  } from 'react'
import styles from "./index.module.less"

export default (props)=>{
    const {cancel,sure}=props
    return <div className={styles.callOut}>
        <main>
            <h2>
                需要小二帮您叫服务生吗？
            </h2>
            <section>
                <button onClick={cancel}>取消</button>
                <button onClick={sure}>叫服务生</button>
            </section>
        </main>
    </div>
}