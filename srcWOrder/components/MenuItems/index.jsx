import React, {useState,useEffect} from 'react'
import styles from "./index.module.less"
import BScroll from "better-scroll"

const MenuItems = (props) => {
    let {list,findToClass} = props
    const [active, setactive] = useState(false);

    useEffect(() => {
        const scroll=new BScroll("#leftScroll",{
            click:true
        })
        return () => {
            scroll.destroy()
        };
    }, []);

    const findTo=(index)=>{
        setactive(false)
        findToClass(index)
    }
    return <div className={active?(styles.active+" "+styles.menuItems):styles.menuItems}>
        <aside className={styles.asideLeft} id="leftScroll">
            <main>
                <ul>
                    <li>分类</li>
                    <li>
                        <i className="iconfont icon-flag_fill"></i>
                        本周销量榜
                    </li>
                    <li>
                        <i className="iconfont icon-document_fill"></i>
                        点过的菜
                    </li>
                </ul>
                <ul>
                    {
                        list.map((item,i)=>{
                            let {items=[],index,name}=item
                            return <li key={index} onClick={()=>findTo(index)}>
                                {name}
                            </li>
                        })
                    }
                </ul>
            </main>

            <p onClick={()=>{setactive(!active)}}>
                <i className="iconfont icon-other"></i>
                <span>分类</span>
            </p>
        </aside>
        <aside className={styles.asideRight}>

        </aside>
    </div>
}



export default MenuItems