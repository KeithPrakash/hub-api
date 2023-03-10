const express =require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

const port = 3000;

const app = express();


try{
app.listen(port,()=>{
    console.log("server is up and running"+port);
})


}catch(err){
    console.log(err);
}
