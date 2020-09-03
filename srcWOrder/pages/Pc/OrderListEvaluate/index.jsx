import React, { useState, useEffect } from 'react'
import {
    Route,
    Link
} from "react-router-dom"
import {
    welcome,
    pc
} from "../../../services"
import { getParams } from "../../../utils/tool"
import styles from "./index.module.less"
import GoBack from "../../../components/GoBack"
import Evaluate from "../../../components/Evaluate"
import { setTimeout } from 'timers'

const OrderListEvaluate = (props) => {
    const [order, setorder] = useState({});
    const { history,match } = props
    console.log(match)
    useEffect(() => {
        pc.getOrder({
            userId: getParams("userId")
        }).then((data) => {
            console.log(data.data)
            let result=data.data.find((item)=>{
                return item.id===match.params.id
            })
            console.log(result)
            setorder(result||{})
        });
    }, []);

    const submit=()=>{
        console.log(order.evaluate)
        pc.evaluate({
            id: match.params.id,
            evaluate:order.evaluate
        }).then((data) => {
           alert("评价完成","success")
           setTimeout(()=>{
                history.go(-1)
           },1000)
        });
    }

    let evaluates=order.evaluate||{};
    let {
        evaluate=0,
        taste=0,
        speed=0,
        environment=0
    }=evaluates;

    const getScore=(type,score)=>{
        setorder({
            ...order,
            ...{
                evaluate:{
                    ...order.evaluate,
                    [type]:score
                }
            }
        })
    }
    return <div className={styles.index}>
        <GoBack {...props} style={{ top: "0.1rem", left: "0.1rem" }}>我的订单</GoBack>
        <main>

            <div className={styles.scrollCon}>

                <div className={styles.item} >
                   <h3>店铺评价</h3>
                    <ul>
                        <li>
                            评价 <Evaluate defaultV={evaluate} getScore={(score)=>getScore("evaluate",score)} />
                        </li>
                        <li>
                            菜肴口味 <Evaluate defaultV={taste} getScore={(score)=>getScore("taste",score)}/>
                        </li>
                        <li>
                            上菜速度 <Evaluate defaultV={speed} getScore={(score)=>getScore("speed",score)}/>
                        </li>
                        <li>
                            就餐环境 <Evaluate defaultV={environment} getScore={(score)=>getScore("environment",score)}/>
                        </li>
                    </ul>
                    <p className={styles.btn}>
                        <button onClick={submit}>提交</button>
                    </p>
                </div>


            </div>
        </main>
    </div>
}
const RenderRouter = () => {
    return <Route path='/pc/orderListEvaluate/:id' component={OrderListEvaluate} />

}
export default RenderRouter