import http from "../http.js"
import {
    getMenuList,
    callOut,
    getMenuDetail
} from "../apis/project"
export default {
    getMenuList(arg){
        return http.get(getMenuList,{
            params:arg
        })
    },
    callOut(arg){
        return http.post(callOut,{...arg})
    },
    getMenuDetail(arg){
        return http.get(getMenuDetail,{params:arg})
    },
}