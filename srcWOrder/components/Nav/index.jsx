import React, {useState } from "react";
import styles from "./index.module.less"
import { Link } from "react-router-dom"

const Nav = (props) => {
    const [state, setstate] = useState(false);


    return <div className={styles.nav}>
        {
            state ? <div className={styles.navList}>
                <section>
                    <Link to="/project/list">
                        <p>
                            <i className="iconfont icon-createtask"></i>
                        </p>
                        <span>
                            菜单
                        </span>
                    </Link>
                    <Link to="/shopCar">
                        <p>
                            <i className="iconfont icon-publishgoods_fill"></i>
                        </p>
                        <span>
                            购物车
                        </span>
                    </Link>
                    <Link to="/order">
                        <p>
                            <i className="iconfont icon-document"></i>
                        </p>
                        <span>
                            已下单的菜
                        </span>
                    </Link>
                    <Link to="/pc/index">
                        <p>
                            <i className="iconfont icon-addressbook"></i>
                        </p>
                        <span>
                            会员中心
                        </span>
                    </Link>
                    <a onClick={()=>{setstate(false)}}>
                        <p>
                            <i className="iconfont icon-close"></i>
                        </p>
                        <span>
                            返回
                        </span>
                    </a>
                </section>
            </div> : <p className={styles.navText} onClick={()=>{setstate(true)}}>
                <span>导航</span>
            </p>
        }
    </div>
}

export default Nav