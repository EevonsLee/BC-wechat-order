import http from "../http.js"
import {
    changeUser,
    getOrder,
    evaluate
} from "../apis/pc"
export default {
    getOrder(arg){
        return http.get(getOrder,{
            params:arg
        })
    },
    changeUser(arg){
        return http.post(changeUser,{...arg})
    },
    evaluate(arg){
        return http.post(evaluate,{...arg})
    }
}