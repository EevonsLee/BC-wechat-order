import React, { useState, useEffect } from 'react'
import {
    Route
} from "react-router-dom"
import {
    welcome,
    pc
} from "../../../services"
import { getParams } from "../../../utils/tool"
import styles from "./index.module.less"
import GoBack from "../../../components/GoBack"

const Msg = (props) => {
    const [data, setdata] = useState({});
    const [state, setstate] = useState({
        phone: {
            originData: "",
            val: "",
            state: true
        },
        email: {
            originData: "",
            val: "",
            state: true
        },
        sex: {
            originData: "",
            val: "",
            state: true
        }
    });
    const { history } = props
    useEffect(() => {
        welcome.getUserInfo(getParams("userId")).then((data) => {
            console.log(data.data);
            ["phone","email","sex"].forEach((item)=>{
                let current=state[item]
                Object.assign(state,{
                    [item]:{
                        ...current,
                        originData:data.data[item]?data.data[item]:"",
                        val:data.data[item]?data.data[item]:""
                    }
                })
            })

            setdata(data.data)

        })
    }, []);

    const changeHandle=(e,type)=>{
        setstate({
            ...state,
            [type]:{
                ...state[type],
                val:e.target.value
            }
        })
    }

    const changeState=(type,send)=>{
        if(send){
            setstate({
                ...state,
                [type]:{
                    ...state[type],
                    state:!state[type].state,
                    originData:state[type].val
                }
            })
            let states= ["phone","email","sex"].reduce((pre,item)=>{
                if(state[item].val){
                    pre[item]=state[item].val
                }
                return pre
            },{})
            pc.changeUser({
                id:getParams("userId"),
                ...states
            }).then(()=>{
                alert("修改成功")
            })


        }else{
            setstate({
                ...state,
                [type]:{
                    ...state[type],
                    state:!state[type].state,
                    val:state[type].originData
                }
            })
        }
    }
   
    return <div className={styles.index}>
        <GoBack {...props}>返回</GoBack>
        <main>

            <div className={styles.scrollCon}>
                <h2>
                    <img src={data.url} alt="" />
                    <p>
                        {data.nickname}
                    </p>
                </h2>
                <div className={styles.item}>
                    <section onClick={() => { history.push("/pc/msg") }}>
                        <aside>
                            <span>手机号</span>
                            <input type="text" value={state.phone.val} disabled={state.phone.state} onChange={(e)=>{changeHandle(e,"phone")}}/>
                        </aside>
                        {
                            state.phone.state ? <i className="iconfont icon-setup_fill" onClick={()=>changeState("phone")}></i> :
                                <p>
                                    <i className="iconfont icon-cuo" onClick={()=>changeState("phone",false)}></i>
                                    <i className="iconfont icon-dui"  onClick={()=>changeState("phone",true)}></i>
                                </p>
                        }

                    </section>
                </div>
                <div className={styles.item}>
                    <section onClick={() => { history.push("/pc/msg") }}>
                        <aside>
                            <span>邮箱</span>
                            <input type="text" value={state.email.val} disabled={state.email.state} onChange={(e)=>{changeHandle(e,"email")}}/>
                        </aside>
                        {
                             state.email.state ? <i className="iconfont icon-setup_fill" onClick={()=>changeState("email")}></i> :
                             <p>
                                 <i className="iconfont icon-cuo" onClick={()=>changeState("email",false)}></i>
                                 <i className="iconfont icon-dui"  onClick={()=>changeState("email",true)}></i>
                             </p>
                        }

                    </section>
                </div>
                <div className={styles.item}>
                    <section onClick={() => { history.push("/pc/msg") }}>
                        <aside>
                            <span>性别</span>
                            {
                                state.sex.state?(state.sex.val==0?"男":"女"):
                                (
                                    <>  
                                        男<input type="radio" name="sex" value="0" checked={state.sex.val=="0"} onChange={(e)=>changeHandle(e,"sex")}/>
                                        女<input type="radio" name="sex" value="1" checked={state.sex.val=="1"} onChange={(e)=>changeHandle(e,"sex")}/>
                                    
                                    </>
                                )

                            }
                   
                        </aside>
                        {
                             state.sex.state ? <i className="iconfont icon-setup_fill" onClick={()=>changeState("sex")}></i> :
                             <p>
                                 <i className="iconfont icon-cuo" onClick={()=>changeState("sex",false)}></i>
                                 <i className="iconfont icon-dui"  onClick={()=>changeState("sex",true)}></i>
                             </p>
                        }

                    </section>
                </div>
            </div>
        </main>
    </div>
}
const RenderRouter = () => {
    return <Route path='/pc/msg' component={Msg} />

}
export default RenderRouter