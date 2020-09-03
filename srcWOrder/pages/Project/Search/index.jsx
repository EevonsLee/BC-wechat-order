import React, { useState,useEffect } from 'react'
import styles from "./index.module.less"
import { Route } from "react-router-dom"
import GoBack from '../../../components/GoBack'
import ProjectList from '../../../components/ProjectList'
import { project } from "../../../services"
import { getParams } from '../../../utils/tool'
import BScroll from "better-scroll"
const Search = (props) => {
    const [val, setval] = useState("");
    const [list, setlist] = useState([]);
    const searchList = () => {
        project.getMenuList({
            id: getParams("shopId"),
            search: val
        }).then((data) => {
            setlist(data.data)
        })
    }
    useEffect(() => {
        let scroll = new BScroll("#scroll", {
            click: true
        })
        return () => {
            scroll.destroy()
        };
    }, []);
    return <div>
        <GoBack {...props}>返回</GoBack>
        <div className={styles.list} id="scroll">
            <main>
                <nav>
                    <i className="iconfont icon-search" onClick={searchList}></i>
                    <input type="text" value={val} onChange={(e) => setval(e.target.value)} />
                    <i className="iconfont icon-delete_fill" onClick={() => setval("")}></i>
                </nav>
                {
                    list.length==0?<p className={styles.none}>客官，请在输入框中输入菜单名称</p>:
                    <section>
 <ProjectList {...props} list={list} />
                    </section>
                   
                }
               
            </main>
        </div>
    </div>
}

const RenderRouter = () => {
    return <Route path='/project/search' component={Search} />

}

export default RenderRouter