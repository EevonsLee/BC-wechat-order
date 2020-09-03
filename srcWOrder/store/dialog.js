import {decorate,observable,action} from "mobx"

class Control{
    msg="操作成功"
    type="success"
    show=false
    change=action(({msg,type="success",show})=>{
        this.msg=msg
        this.type=type
        this.show=show

    })
}

decorate(Control,{
    msg:observable,
    type:observable,
    show:observable,
    time:observable
})

export default new Control()