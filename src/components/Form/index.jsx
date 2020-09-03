import React, { Component } from 'react'

class Styles extends Component{
    state={
        form:{
            name:"lisi",
            sex:"",
            love:[]
        }
    }
  
    change=(e)=>{
        let {form}=this.state
        let {value,name,type}=e.target
        let data=form[name]
        if(type=="checkbox"){

            if(e.target.checked){
                data=this.splice(data,value,"add")
            }else{
                data=this.splice(data,value,"reduce")
            }
            this.setState({
                form:Object.assign(form,{[name]:data})
            })
            return
        }
        this.setState({
            form:Object.assign(form,{[name]:value})
        })
    }

    splice(data,val,type){
        if(type=="add"){
            return data.includes(val)?data:[...data,val]
        }else{
            return data.includes(val)?data.filter((item)=>{
                return item!=val
            }):data
        }
    }

    render(){
        const {name}=this.state.form
        return <div>
           <ul onChange={this.change}>
               <li>
                   <label htmlFor="">姓名：</label>
                   <input type="text" value={name} name="name"/>
               </li>
               <li>
                   <label htmlFor="">性别:</label>
                   <input type="radio" name="sex" value="男"/>男
                   <input type="radio" name="sex" value="女"/>女
               </li>
               <li>
                   <label htmlFor="">爱好：</label>
                   <input type="checkbox" name="love" value="足球" />足球
                   <input type="checkbox" name="love" value="篮球"  />篮球
                   <input type="checkbox" name="love" value="乒乓球" />乒乓球
               </li>
               <li>
                   <button onClick={()=>{console.log(this.state.form)}}>提交</button>
               </li>
           </ul>
        </div> 
    }

}

export default Styles