import React, { useState, useEffect } from 'react'
import styles from "./index.module.less"
import { order } from "../../services"
import { getParams } from '../../utils/tool'
import GoBack from "../../components/GoBack"
import {Link} from "react-router-dom"
export default (props) => {
    const {history}=props
    const [data, setdata] = useState({});

    const [type, settype] = useState(false);
    const [control, setcontrol] = useState({display:"none"});
    useEffect(() => {
        order.getOrder({
            shopId: getParams("shopId"),
            tableNum: getParams("tableNum")
        }).then((data) => {
            console.log(data.data)
            setdata(data.data)
        })
    }, []);

    const detailChange=()=>{
        if(type){
           setcontrol({display:"none"})
        }else{
            setcontrol({display:"block"})
        }
        settype(!type)
    }
    const submit=()=>{
        order.pay({
            shopId: getParams("shopId"),
            tableNum: getParams("tableNum")
        }).then((data) => {
            history.pushState("/pc/index")
        })
    }

    let { menus = [] } = data
    return <div className={styles.order}>
        <GoBack {...props}>已下单的菜</GoBack>
        <main>
            <div className={styles.scrollCon}>
                <h2>{data.tableNum}桌</h2>
                <p className={styles.allPrice}>￥{data.allPrice}</p>
                <div className={styles.section1}>
                    <section>
                        <p>
                            <b>合计：{menus.length}项</b>
                            <button onClick={detailChange}>
                                <span>订单详情</span>
                                <i className={type ? "iconfont icon-unfold" : "iconfont icon-packup"}></i>
                            </button>
                        </p>
                        <ul className={styles.list} style={control}>
                            {
                                menus.map((item,index) => {
                                    return <li key={index}>
                                        <p>
                                            <span>{item.name}</span>
                                            <i>已下厨</i>
                                        </p>
                                        <p>
                                            <span>￥{item.price}</span>
                                            <span>{item.count}{item.account}</span>
                                        </p>
                                    </li>
                                })
                            }

                        </ul>
                    </section>
                    <h5>账单信息</h5>
                    <ul className={styles.middle}>
                        <li>
                            <aside>消费金额</aside>
                            <aside>${data.allPrice}</aside>
                        </li>
                        <li>
                            <aside>服务费</aside>
                            <aside>$35.00</aside>
                        </li>

                    </ul>
                    <p className={styles.allPriceB}>
                        <span>应付金额</span>
                        <span>￥{parseFloat(data.allPrice) + 35}</span>
                    </p>
                </div>
                <div className={styles.section3}>
                    <h3>支付方式</h3>
                    <p>
                        <input type="checkbox" />
                        <i className="iconfont icon-weixin"></i>
                        <span>微信支付</span>
                    </p>
                </div>
            </div>
        </main>
        <footer>
            <Link to="/project/list">继续点餐</Link>
            <a href="" onClick={submit}>{parseFloat(data.allPrice) + 35} 立即支付</a>
        </footer>
    </div>
}