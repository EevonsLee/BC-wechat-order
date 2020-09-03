import React, { Component } from 'react'

class Styles extends Component{
    state={
        arr:[1,2,3,4,5,6,7,8,9]
    }
    
    render(){
        let ren=[]
        for (const item of this.state.arr) {
            ren.push(<li key={item}>{item}</li>)
        }
      
        return <div>
           <ul>
                {/* {ren} */}
                {
                    this.state.arr.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
           </ul>
        </div> 
    }

}

export default Styles