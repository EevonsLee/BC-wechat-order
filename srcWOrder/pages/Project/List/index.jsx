import React, { useEffect, useState } from 'react'
import {
    Route,
    Link
} from "react-router-dom"
import {
    project
} from "../../../services"
import Styles from "./index.module.less"
import {
    getParams
} from "../../../utils/tool"

import BScroll from "better-scroll"
import SearchBtn from "../../../components/SearchBtn/index.jsx"
import BtnLink from "../../../components/BtnLink/index.jsx"
import MenuItems from "../../../components/MenuItems/index.jsx"
import Nav from "../../../components/Nav/index.jsx"
import CallOut from "../../../components/CallOut/index.jsx"

const List = (props) => {
    const {history}=props
    const [list, setlist] = useState([]);
    const [scroll, setscroll] = useState(null);

    // 控制服务铃的显示与隐藏
    const [callout, setcallout] = useState(false);

    // 初始化
    useEffect(() => {
        project.getMenuList({
            id: getParams("shopId")
        }).then((data) => {
            console.log(data)
            setlist(data.data.kindMenus)
        })
    }, []);

    //初始化better-scroll
    useEffect(() => {
        const scroll = new BScroll("#scroll", {
            click: true
        })
        setscroll(scroll)
        return () => {
            scroll.destroy()
        };
    }, []);
    const findToClass=(index)=>{
        console.log(index)
        let top=document.getElementById(index).offsetTop
        scroll.scrollTo(0,-top,1000)
    }

    // 呼叫
    const sure=()=>{
        project.callOut({
            shopId:getParams("shopId"),
            tableNum:getParams("tableNum"),
            userId:getParams("userId")
        }).then(()=>{
            setcallout(false)
        })
    }
    return <div>
        <SearchBtn cb={()=>{history.push("/project/search")}} icon="icon-search" />
        <BtnLink cb={()=>{history.push("/shopCar")}} style={{bottom:"0.4rem",right:"0.2rem"}} icon="icon-publishgoods_fill">购物车</BtnLink>
        <MenuItems list={list} findToClass={findToClass}>购物车</MenuItems>
        <Nav />
        {callout&&<CallOut cancel={()=>setcallout(false)} sure={sure}/>}
        <div id="scroll" className={Styles.list}>
            <main>
                <nav>
                    <Link to="/project/list">
                        <i className="iconfont icon-examineandapprove"></i>
                        <span>随便点</span>
                    </Link>
                    <Link to="/project/hotlist">
                        <i className="iconfont icon-flag_fill"></i>
                        <span>热销榜</span>
                    </Link>
                    <Link to="/project/list">
                        <i className="iconfont icon-document_fill"></i>
                        <span>点过的菜</span>
                    </Link>
                    <a onClick={() => {setcallout(true) }}>
                        <i className="iconfont icon-remind_fill"></i>
                        <span>服务铃</span>
                    </a>
                </nav>
                {
                    list.map((item, i) => {
                        let { items = [], index, name } = item
                        return <section key={index} id={index}>
                            <h3>{name}</h3>
                            <ul>
                                {
                                    items.map((jtem, j) => {
                                        let { imagePath, name, memberPrice, price,id } = jtem
                                        return <li key={j} onClick={()=>{history.push("/project/detail/"+id)}}>
                                            <img src={imagePath} alt="" />
                                            <h4>{name}</h4>
                                            <b>会员：￥{memberPrice}</b>
                                            <span>原价：￥{price}</span>
                                        </li>
                                    })
                                }
                            </ul>
                        </section>
                    })
                }
            </main>
        </div>
    </div>
}

const RenderRouter = () => {
    return <Route path="/project/list" exact component={List} />
}

export default RenderRouter