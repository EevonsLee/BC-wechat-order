import {createStore} from "redux"

export const actions={
    add(arg){
        return {
            type:"ADD",
            value:arg
        }
    }
}

const nameInitialState = {
    num:0
}

const reducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case "ADD":
            console.log("add")
            return Object.assign({},state,{num:state.num+1})
        default:
            return state
    }
}

export default createStore(reducer)