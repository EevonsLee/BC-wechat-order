const express=require("express")
const router=express.Router()
const fileHandle=require("../utils/fileHandle")
const Unique=require("../utils/Unique")
const createTime=require("../utils/creatTime")
const {readMenuList}=require("./common/getInfo")
//获取店铺菜单
router.get("/getMenuList",async (req,res,next)=>{
    const {id,type,search}=req.query

    let data=await fileHandle.read("../files/memuList")

    let result=data.find((item)=>{
        return item.shopId===id
    })
    //热销
    if(type==="hot"){
        result=result?result.kindMenus.reduce((pre,jtem)=>{
            jtem.items.forEach((j)=>{
                if(j.hot){
                    pre.push(j)
                }
            })
            return pre
        },[]):[]
    }

    //搜索
    if(search!==undefined){
        result=result?result.kindMenus.reduce((pre,jtem)=>{
            jtem.items.forEach((j)=>{
                if(j.name.includes(search)){
                    pre.push(j)
                }
            })
            return pre
        },[]):[]
    }

    res.send({
        code:200,
        data:result||{},
        msg:"ok"
    })
})

//呼叫服务员
router.post("/callOut",async (req,res,next)=>{
    const {shopId,tableNum,userId}=req.body
    const result={
        id:Unique(),
        shopId,
        tableNum,
        userId,
        createTime:createTime()
    }
    await fileHandle.add("../files/callOut",result)
    res.send({
        code:200,
        msg:"ok"
    })
})

//菜单详情获取
router.get("/getMenuDetail",async (req,res,next)=>{
    const {shopId,id}=req.query
   
    let datas=await readMenuList(shopId)
    let result=datas.find((item)=>{
        return item.id===id
    })

    res.send({
        code:200,
        data:result||{},
        msg:"ok"
    })
})
module.exports=router