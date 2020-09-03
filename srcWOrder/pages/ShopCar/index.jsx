import React, { useState, useEffect,useMemo } from 'react'
import styles from "./index.module.less"
import {
    shopCar,
    order
} from "../../services"
import { Route } from "react-router-dom"
import { getParams } from '../../utils/tool'
import Nav from "../../components/Nav";

import BtnLink from "../../components/BtnLink"
import {observer} from "mobx-react"
import {shopCar as store} from "../../store"

const ShopCar= observer((props) => {
    const { history,store } = props
    
    const {data,change}=store
    const [changePState, setchangePState] = useState(false);
    // const [data, setdata] = useState({});
    const [people, setpeople] = useState(0);
    useEffect(() => {
        shopCar.getShopCar({
            shopId: getParams("shopId"),
            tableNum: getParams("tableNum")
        }).then((data) => {
            console.log(data)
              // 意味着有未支付订单
              if(data.state==false){
                alert("有未支付订单","success")
                setTimeout(() => {
                    history.push("/order")
                }, 1000);
                return
            }

            // setdata(data.data)
            change(data.data)
            setpeople(data.data.table.people)
        })
    }, []);

    const allPrice=useMemo(()=>{
        let {menus=[]}=data
        return menus.reduce((pre,item)=>{
            let {items}=item
            let res=items.reduce((pre,jtem)=>{
                pre=pre+jtem.price*jtem.count
                return pre
            },0)
            pre=pre+res
            return pre
        },0)
    })
    console.log(allPrice)
    //修改购物车数量

    const changeNum=(type,item)=>{
        if(type=="+"){
            item.count++
        }else if(type=="-"&&item.count>1){
            item.count--
        }
       shopCar.changeShopCar({
           id:item.id,
           count:item.count
       }).then(()=>{

       })
    }



    // 修改用餐人数
    const changePeopleH=()=>{
        console.log(people)
        shopCar.changePeople({
            shopId: getParams("shopId"),
            tableNum: getParams("tableNum"),
            people
        }).then(()=>{
            alert("修改人数成功","success")
            setchangePState(false)
        })
    };
    const clearShop=()=>{
        shopCar.clearShopCar({
            shopId: getParams("shopId"),
            tableNum: getParams("tableNum")
        }).then(()=>{
            history.push("/project/list")
        })
    }
    const sendOrder=()=>{
        order.sendOrder({
            shopId: getParams("shopId"),
            tableNum: getParams("tableNum"),
            userId:getParams("userId")
        }).then(()=>{
            history.push("/order")
        })

       
    }

    return <div className={styles.shop}>
        <Nav {...props}></Nav>
        <BtnLink icon="icon-createtask" style={{ bottom: "0.4rem", left: "3.25rem" }} cb={() => { history.push("/project/list") }}>点菜</BtnLink>
        <BtnLink icon="icon-right" style={{ bottom: "0.4rem", right: "0.2rem" }} cb={() => sendOrder() }>下单</BtnLink>

        <main>
            <div className={styles.top}>
                <h2>购物车</h2>
                <section>
                    <aside>
                        <p>
用餐人数：{changePState ? <input type="text" value={people} onChange={(e)=>setpeople(e.target.value)} onBlur={changePeopleH}/> : <b>{people}</b>}人
                        
                        </p>
                        <span>备注：无</span>
                    </aside>
                    <aside className={styles.topAsideRight}>
                        <i className="iconfont icon-setup"></i>
                        <p onClick={()=>{
                            setchangePState(true)
                        }}>修改</p>
                    </aside>
                </section>
                <section>
                    <aside>

                    <span>购物车里有：{
                             data.menus && data.menus.map((item) => {
                                 return item.name+item.items.length+"个 "
                             })
                        }</span>
                    <b>合计：￥{allPrice}</b>
                    </aside>
                    <aside className={styles.topAsideRight}>
                        <i className="iconfont icon-empty"></i>
                        <p onClick={clearShop}>清空</p>
                    </aside>
                </section>
            </div>
            {
                data.menus && data.menus.map((item) => {
                    let { items } = item
                    return <div className={styles.item}>
                        <h2>{item.name}</h2>
                        {
                            items.map((jtem) => {
                                return <section>
                                    <aside className={styles.itemLeft}>
                                        <p>
                                            <img src={jtem.user.url} alt="" />
                                            <span>{jtem.user.nickname}</span>
                                        </p>
                                        <aside>
                                            <h4>{jtem.name}</h4>
                                            <p>￥{jtem.price}</p>
                                        </aside>
                                    </aside>

                                    <aside className={styles.itemRight}>
                                        <p>
                                            <b onClick={()=>changeNum("-",jtem)}>-</b>
                                            <span>{jtem.count}{jtem.account}</span>
                                            <b onClick={()=>changeNum("+",jtem)}>+</b>
                                        </p>
                                    </aside>
                                </section>
                            })
                        }
                    </div>
                })
            }
        </main>
    </div>
})

export default (props)=> <ShopCar {...props} store={store} />