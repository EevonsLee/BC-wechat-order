const express=require("express")
const router=express.Router()
const fileHandle=require("../utils/fileHandle")
const Unique=require("../utils/Unique")
const creatTime=require("../utils/creatTime")
//获取店铺信息
router.get("/getShopMsg",async (req,res,next)=>{
    const {id}=req.query
    let data=await fileHandle.read("../files/shop")
    const result=data.find((item)=>{
        return item.id===id
    })

    res.send({
        code:200,
        data:result||{},
        msg:"ok"
    })
})
//获取用户信息
router.get("/getUserMsg",async (req,res,next)=>{
    const {id}=req.query
    let data=await fileHandle.read("../files/users")
    const result=data.find((item)=>{
        return item.id===id
    })

    res.send({
        code:200,
        data:result||{},
        msg:"ok"
    })
})
//添加用餐人数
router.post("/addPeople",async (req,res,next)=>{
    const {shopId,userId,tableNum,people}=req.body
    const data={
        id:Unique(),
        shopId:shopId,
        userId:userId,
        tableNum:tableNum,
        people:people
        // createTime:creatTime()

    }

   await fileHandle.add("../files/table",data)

    res.send({
        code:200,
        msg:"ok"
    })
})
module.exports=router