import React, { useEffect,useState } from 'react'
import {
    Route,
    Link
} from "react-router-dom"
import {
    welcome
} from "../../../services"
import Styles from "./index.module.less"
import {
    getParams
} from "../../../utils/tool"
const Shop=(props)=>{
    const [shop, setshop] = useState({});
    const [userInfo, setuserInfo] = useState({});
    useEffect(() => {
        //请求店铺数据
        welcome.getShopData(getParams("shopId")).then((data)=>{
            console.log(data)
            setshop(data.data)
        })
        //请求用户信息
        welcome.getUserInfo(getParams("userId")).then((data)=>{
            console.log(data)
            setuserInfo(data.data)
        })
    }, []);

    return <div className={Styles.shop}>
        <h2>
<span>{shop.shop_name}</span>
        </h2>
<section>欢迎光临，{userInfo.nickname}</section>
        <Link to="/welcome/selectPeople" className={Styles.btn}>开始点餐结账</Link>
    </div>
}

const RenderRouter=()=>{
    return <Route path="/welcome/shop" exact component={Shop} />
}

export default RenderRouter