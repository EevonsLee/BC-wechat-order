import {decorate,observable,action} from "mobx"

class Control{
    data={}
    change=action((arg)=>{
        this.data=arg
    })
}

decorate(Control,{
    data:observable
})

export default new Control()