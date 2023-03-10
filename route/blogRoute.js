const express= require("express")
const blogController =require("../controller/blogController")

const router =express.Router();

router.post('/save',blogController.saveBlog);



module.exports=router;