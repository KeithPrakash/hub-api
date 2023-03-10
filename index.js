const express =require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
require("dotenv").config();

const port = 3000;
// creating app
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//=========route===========
const blogRoute=require("./route/blogRoute")

//=========route===========

// connect to database 
mongoose.connect("mongodb://localhost:27017/hubApi").then(()=>{
app.listen(port, () => {
  console.log("server is up and running" + port);
});

}).catch((error)=>{
console.log(error);
}

)


app.use("/api/v1/blog",blogRoute);