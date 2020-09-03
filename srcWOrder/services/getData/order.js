import http from "../http.js"
import {
    sendOrder,
    getOrder,
    pay
} from "../apis/order"
export default {
    getOrder(arg){
        return http.get(getOrder,{
            params:arg
        })
    },
    sendOrder(arg){
        return http.post(sendOrder,{...arg})
    },
    pay(arg){
        return http.post(pay,{...arg})
    }
}