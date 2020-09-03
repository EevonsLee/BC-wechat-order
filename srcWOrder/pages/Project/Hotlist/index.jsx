import React, { useEffect, useState } from 'react'
import styles from "./index.module.less"
import { Route } from "react-router-dom"
import GoBack from "../../../components/GoBack/index.jsx"
import ProjectList from "../../../components/ProjectList/index.jsx"
import { project } from "../../../services"
import BScroll from "better-scroll"
import {
    getParams
} from "../../../utils/tool"
const Hotlist = (props) => {
    const [list, setlist] = useState([]);
    useEffect(() => {
        project.getMenuList({
            id: getParams("shopId"),
            type: "hot"
        }).then((data) => {
            console.log(data)
            setlist(data.data.sort((a, b) => {
                return b.soldCount - a.soldCount
            }))
        })
    }, []);

    useEffect(() => {
        let scroll = new BScroll("#scroll", {
            click: true
        })
        return () => {
            scroll.destroy()
        };
    }, []);
    return <div className={styles.out}>
        <GoBack {...props} >返回</GoBack>
        <div className={styles.list} id="scroll">
            <main>
                <nav>本店销量榜</nav>
                <ProjectList {...props} list={list} />
            </main>
        </div>

    </div>
}

const RenderRouter = () => {
    return <Route path='/project/hotlist' component={Hotlist} />
}

export default RenderRouter