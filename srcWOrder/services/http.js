import axios from "axios"

export default axios

axios.interceptors.request.use((config)=>{
    config.headers["key"]=1
    return config
})

axios.interceptors.response.use((res)=>{
    return res.data
})