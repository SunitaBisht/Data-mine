const {blogService}=require('../service')

const {crateBlogpost}=blogService

const postBlogpost=async(req,res,next)=>{
    const {user,content}=req.body

    try{
        await createBlogpost(user,content)
        res.sendStaus(201)
        next()

    }
    catch(e){
        console.log(e.message)
        res.sendStatus(500) && next(err)
    }
}
module.exports={
    postBlogpost
}