const express=require("express")
const router=express.Router()
const fileHandle=require("../utils/fileHandle")
const Unique=require("../utils/Unique")
const creatTime=require("../utils/creatTime")
const {readMenuList,getUsers}=require("./common/getInfo")

//下单
router.post("/sendOrder",async (req,res,next)=>{
    const {shopId,tableNum,userId}=req.body
    //获取购物车数据
    let data=await fileHandle.read("../files/shopCar")
    let arr=data.filter((item)=>{
        return item.shopId==shopId&&item.tableNum==tableNum
    })

    //所有菜单详情
    let allMenus=await readMenuList(shopId)


    const allPrice=allMenus.reduce((pre,item)=>{
        let obj;
        arr.find((jtem)=>{
            if(item.id==jtem.menuId){
                obj=Object.assign({},item,jtem)
            }
        })
        if(obj){
            pre=pre+obj.count*obj.price
        }
       return pre
    },0)
    console.log(allPrice)

    let result={
        id:Unique(),
        userId,
        shopId,
        tableNum,
        menus:arr,
        allPrice:allPrice,
        isPay:false
    }
    await fileHandle.add("../files/order",result)

    for (const item of arr) {
        await fileHandle.remove("../files/shopCar","id",item.id)
    }

    //清除table

    let tablearr=await fileHandle.read("../files/table")

    tablearr=tablearr.filter((item)=>{
        return item.shopId==shopId&&item.tableNum==tableNum
    })

    for (const item of tablearr) {
        await fileHandle.remove("../files/table","id",item.id)
    }


    res.send({
        code:200,
        msg:"ok"
    })
})

//获取订单
router.get("/getOrder",async (req,res,next)=>{
    const {shopId,tableNum}=req.query
    let allOrder=await fileHandle.read("../files/order")
    let result=allOrder.find((item)=>{
        return item.shopId==shopId&&item.tableNum==tableNum&&item.isPay==false
    })
    result=result||{}
    let data=await readMenuList(shopId)
    if(result.menus){
        result.menus=result.menus.map((item)=>{
            let obj=data.find((jtem)=>{
                if(jtem.id==item.menuId){
                    return true
                }
                return false
            })
            delete obj.id
            Object.assign(item,obj)
            return item
        })
    }
    res.send({
        code:200,
        data:result||{},
        msg:"ok"
    })
})
//支付接口
router.post("/pay",async (req,res,next)=>{
    const {shopId,tableNum}=req.body
    let allOrder=await fileHandle.read("../files/order")
    let data=allOrder.map((item)=>{
        if(item.shopId==shopId&&item.tableNum==tableNum&&item.isPay==false){
            item.isPay=true
            item.time=creatTime()
        }
        return item
    })
    await fileHandle.write("../files/order",data)
    res.send({
        code:200,
        msg:"ok"
    })
})
module.exports=router