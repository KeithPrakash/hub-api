const BlogSchema =require('../model/blogs');


const saveBlog=(res,req)=>{
const blog =BlogSchema({
    title:req.body.title,
    link:req.body.link,
    date:req.body.date

})
blog.save().then(result=>{
    res.json({data:{status:201,message:'blog saved'}});
}).catch(error=>{
    console.log(error);
    res.json(error)
    
})

}

module.exports={
    saveBlog
}