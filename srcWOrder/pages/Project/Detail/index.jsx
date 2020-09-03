import React, { useEffect, useState } from 'react'
import styles from "./index.module.less"
import { Route } from "react-router-dom"
import { shopCar,project } from "../../../services"
import { getParams,serialize } from '../../../utils/tool'
import GoBack from "../../../components/GoBack"

const Detail = (props) => {
    console.log(props)
    const { match,history } = props
    const [data, setdata] = useState({});
    const [count, setcount] = useState(1);

    useEffect(() => {
        project.getMenuDetail({
            shopId: getParams("shopId"),
            id: match.params.id
        }).then((data) => {
            console.log(data)
            setdata(data.data)
        })
    }, []);

    const submit=()=>{
        shopCar.sendShopCar({
            shopId:getParams("shopId") ,
            userId:getParams("userId") ,
            tableNum:getParams("tableNum") ,
            menuId:match.params.id,
            count:count
        }).then((data)=>{
             // 意味着有未支付订单
             if(data.state==false){
                alert("有未支付订单","success")
                setTimeout(() => {
                    history.push("/order")
                }, 1000);
                return
            }

            alert("购物车添加成功","success")
            setTimeout(() => {
                history.push("/shopCar")
            }, 1000);
        })
    }


    return <div className={styles.detail}>
        <GoBack {...props}>返回</GoBack>
        <img src={data.imagePath} alt="" />
        <section>
            <h3>{data.name}</h3>
            <p>￥{serialize(data.price)}/{data.account}</p>
        </section>
        <footer>
            <aside>
                <label htmlFor="">数量</label>
                <p>
                    <b onClick={()=>setcount(count>1?count-1:count)}>-</b>
                    <span>{count}{data.account}</span>
                    <b onClick={()=>setcount(count+1)}>+</b>
                </p>
            </aside>
            <button className={styles.shop} onClick={submit}>
                加入购物车
            </button>
        </footer>
    </div>
}

const RenderRouter = () => {
    return <Route path='/project/detail/:id' component={Detail} />

}

export default RenderRouter