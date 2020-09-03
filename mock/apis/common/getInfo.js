const fileHandle=require("../../utils/fileHandle")

module.exports={
    //传入的是店铺的id
    readMenuList:async(id)=>{
        let allMenus=await fileHandle.read("../files/memuList")
        allMenus=allMenus.find((item)=>{
            return item.shopId===id
        })
        allMenus=allMenus?allMenus.kindMenus:[]
        return allMenus.reduce((pre,jtem)=>{
            pre.push(...jtem.items)
            return pre
        },[])
    },
    getUsers:async()=>{
        let users=await fileHandle.read("../files/users")
        return users
    }
}