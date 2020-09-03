import React, { } from 'react'
import styles from "./index.module.less"

export default (props) => {
    const { list } = props
    console.log(list)
    return <ul className={styles.list}>
        {
            list.map((item, index) => {
                return <li key={index}>
                    <aside>
                        <img src={item.imagePath} alt="" />
                        <h4>{item.name}</h4>
                    </aside>
                    <aside>
                        <div>
                            第
                            <p>
                                <b>{index + 1}</b>
                                <i className="iconfont icon-like_fill"></i>
                            </p>
                            名
                        </div>
                        <span>已售{item.soldCount}份</span>
                    </aside>
                </li>
            })
        }
    </ul>
}