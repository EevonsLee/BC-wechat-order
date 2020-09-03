const fetch=require("node-fetch")
const fileHandle=require("../utils/fileHandle")
module.exports=async(req,res,next)=>{
   const {openid}=req.cookies
   const {code}=req.query
   if(openid){
        next()
   }else if(code){
       console.log(code)
       try {
            let userMsg=await getUserInfo(req,res,next,code)
            console.log(userMsg)
            let data=await fileHandle.read("../files/users")
            const result=data.find((item)=>{
                return item.id==userMsg.openid
            })
            if(!result){
                await fileHandle.add("../files/users",Object.assign(userMsg,{id:userMsg.openid}))
            }
            res.cookie("openid",userMsg.openid,{
                expires:new Date(Date.now()+86400000),
            })
            let statecode=req.originalUrl.split("&").filter((item)=>{
                if(!item.includes("code")&&!item.includes("state")){
                    return true
                }
            })
            statecode.push("userId="+userMsg.openid)
            statecode=statecode.join("&")
            const redirect_uri=req.protocol+"://"+req.hostname+statecode
            res.redirect(redirect_uri)
       } catch (error) {
            redirect(req,res)
       }
   }else{
    redirect(req,res)
   }

}

//code存在时进行用户信息获取

async function getUserInfo(req,res,next,code){
    let tokenData=await getAccess_token(code)
    if(tokenData.errcode){
        await Promise.reject("code失败")
    }
    let userData=await getUserData(tokenData)
    return userData
}

const wxConfig={
    appid:"wx0ca99a203b1e9943",
    secret:"42e2f5f82f6390c3d101527966a88de0"
}
//1、重定向到微信授权地址
function redirect(req,res){
    let statecode=req.originalUrl.split("&").filter((item)=>{
        if(!item.includes("code")&&!item.includes("state")){
            return true
        }
    }).join("&")
    const redirect_uri=req.protocol+"://"+req.hostname+statecode
    console.log(redirect_uri)
    res.redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxConfig.appid}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`)
}

//2 根据code获取access_token,code每次授权都不一样，code只能使用一次，5分钟未被使用就会过期
function getAccess_token(code){
    return new Promise((resolve,reject)=>{
        fetch(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${wxConfig.appid}&secret=${wxConfig.secret}&code=${code}&grant_type=authorization_code`,{
            method:"get"
        }).then((data)=>{
            return data.json()
        }).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}

//3 拉取用户信息（access_tokenaccess_token）

function getUserData(tokenData){
    return new Promise((resolve,reject)=>{
        fetch(`https://api.weixin.qq.com/sns/userinfo?access_token=${tokenData.access_token}&openid=${tokenData.openid}&lang=zh_CN`,{
            method:"get"
        }).then((data)=>{
            return data.json()
        }).then((data)=>{
            resolve(data)
        }).catch((err)=>{
            reject(err)
        })
    })
}
