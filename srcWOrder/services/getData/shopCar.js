import http from "../http.js"
import {
    sendShopCar,
    changePeople,
    getShopCar,
    changeShopCar,
    clearShopCar
} from "../apis/shopCar"
export default {
    sendShopCar(arg){
        return http.post(sendShopCar,{...arg})
    },
    changePeople(arg){
        return http.post(changePeople,{...arg})
    },
    getShopCar(arg){
        return http.get(getShopCar,{params:arg})
    },
    changeShopCar(arg){
        return http.get(changeShopCar,{params:arg})
    },
    clearShopCar(arg){
        return http.get(clearShopCar,{params:arg})
    }
}