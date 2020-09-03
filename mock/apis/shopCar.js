const express=require("express")
const router=express.Router()
const fileHandle=require("../utils/fileHandle")
const Unique=require("../utils/Unique")
const creatTime=require("../utils/creatTime")
const {readMenuList,getUsers}=require("./common/getInfo")

const middle=async({shopId,tableNum})=>{
    let allOrder=await fileHandle.read("../files/order")
    let state=allOrder.some((item)=>{
        return item.shopId==shopId&&item.tableNum==tableNum&&item.isPay==false
    })
    return state
}

//添加购物车
router.post("/sendShopCar",async (req,res,next)=>{
    const {shopId,userId,tableNum,menuId,count}=req.body

    const state=await middle(req.body)
    if(state){
        res.send({
            code:200,
            state:false,
            msg:"ok"
        })
        return 
    }
   let data={
       id:Unique(),
       shopId,
       userId,
       tableNum,
       menuId,
       count
   }

   //看看购物车有没有当前菜单
   let arrData=await fileHandle.read("../files/shopCar")
   let result=arrData.find((item)=>{
        return item.shopId==shopId&&item.menuId==menuId&&item.tableNum===tableNum
   })
   //如果有当前菜单，先删除
   if(result){
        await fileHandle.remove("../files/shopCar","id",result.id)
   }
   await fileHandle.add("../files/shopCar",data)
    res.send({
        code:200,
        msg:"ok"
    })
})
//修改用餐人数
router.post("/changePeople",async (req,res,next)=>{
    const {shopId,tableNum,people}=req.body
    let data=await fileHandle.read("../files/table")

   //修改数据
    data=data.map((item)=>{
        if(item.shopId===shopId&&item.tableNum===tableNum){
            item.people=people
        }
        return item
    })
   await fileHandle.write("../files/table",data)
    res.send({
        code:200,
        msg:"ok"
    })
})

//获取购物车数据

router.get("/getShopCar",async(req,res,next)=>{

    let {shopId,tableNum}=req.query

    const state=await middle(req.query)
    if(state){
        res.send({
            code:200,
            state:false,
            msg:"ok"
        })
        return 
    }
    
    let data=await fileHandle.read("../files/shopCar")


    let result=data.filter((item)=>{
        return item.shopId===shopId&&item.tableNum==tableNum
    })

    //获取当前店铺大的所有菜单
    let allMenus=await fileHandle.read("../files/memulist")

    allMenus=allMenus.find((item)=>{
        return item.shopId===shopId
    })
    allMenus=allMenus?allMenus.kindMenus:[]

    //获取所有用户信息
    let users=await getUsers()

    //数据的联合
    let menus=allMenus.reduce((pre,item)=>{
        let arr=item.items.reduce((pre,jtem)=>{
            let obj=result.find((ktem)=>{
                return jtem.id==ktem.menuId
            })
            if(obj){
                let user=users.find((item)=>{
                    return item.id==obj.userId
                })
                let data=Object.assign({},jtem,obj,{user})
                pre.push(data)
            }
            return pre
        },[])
        if(arr.length>0){
            pre.push(Object.assign(item,{items:arr}))
        }
        return pre
    },[])
    let table=await fileHandle.read("../files/table")
    table=table.find((item)=>{
        return item.shopId==shopId&&item.tableNum==tableNum
    })
    res.send({
        code:200,
        data:{
            table,
            menus
        },
        msg:"ok"
    })

})




//修改购物车数量
router.get("/changeShopCar",async (req,res,next)=>{
    const {id,count}=req.query
    let data=await fileHandle.read("../files/shopCar")
    let result=data.find((item)=>{
        if(item.id==id){
            return true
        }
        return false
    })
    if(result){
        result.count=count
    }
    await fileHandle.amend("../files/shopCar",result||{})
    res.send({
        code:200,
        msg:"ok"
    })
})

//清空购物车
router.get("/clearShopCar",async (req,res,next)=>{
    const {shopId,tableNum}=req.query
    let data=await fileHandle.read("../files/shopCar")
    let result=data.filter((item)=>{
        return item.shopId==shopId&&item.tableNum==tableNum
    })
    for (const item of result) {
        await fileHandle.remove("../files/shopCar","id",item.id)
    }
   
    res.send({
        code:200,
        msg:"ok"
    })
})
module.exports=router