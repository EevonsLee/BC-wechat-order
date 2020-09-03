import React, { useState,useEffect } from 'react'
import {
    Route
} from "react-router-dom"
import {
    welcome
} from "../../../services"
import { getParams } from "../../../utils/tool"
import styles from "./index.module.less"
import GoBack from "../../../components/GoBack"

const Index = (props) => {
    const [data, setdata] = useState({});
    const {history}=props
    useEffect(() => {
        welcome.getUserInfo(getParams("userId")).then((data) => {
            console.log(data.data)
            setdata(data.data)
        })
    }, []);

    return <div className={styles.index}>
        <GoBack {...props}>返回</GoBack>
        <main>
            
            <div className={styles.scrollCon}>
                <h2>
                    <img src={data.url} alt="" />
                    <p>
                        {data.nickname}
                    </p>
                </h2>
                <div className={styles.item}>
                    <section onClick={()=>{history.push("/pc/msg")}}>

                        <aside>
                            <i className="iconfont icon-addressbook_fill"></i>
                            <span>个人信息</span>
                        </aside>
                        <i className="iconfont icon-enter"></i>
                    </section>
                </div>
                <div className={styles.item}>
                    <section onClick={()=>{history.push("/pc/orderList")}}>
                        <aside>
                            <i className="iconfont icon-createtask"></i>
                            <span>订单列表</span>
                        </aside>
                        <i className="iconfont icon-enter"></i>
                    </section>
                </div>
            </div>
        </main>
    </div>
}
const RenderRouter = () => {
    return <Route path='/pc/index' component={Index} />

}
export default RenderRouter