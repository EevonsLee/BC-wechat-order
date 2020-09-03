import React, { useState ,useEffect} from 'react'
import Store,{actions} from "../../store/index"
import { connect} from "react-redux"

 function B(props){

    // const [num,setNum]=useState(props.num)

    // useEffect(() => {
    //     setNum(props.num)
    // });

    return <div>
        <h5>B组件</h5>
            <p>{props.num}</p>
            <button onClick={()=>Store.dispatch(actions.add())}>add</button>
        </div>
    
}

const mapStateToProps = (state) => {
    return {
        num: state.num
    }
}

export default connect(mapStateToProps)(B)