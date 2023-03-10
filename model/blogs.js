const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({

title:{
type: String,
required:true,
},
link:{
    type:String,
    required:true,
},
date:{
    type:String,
    required:true,
},
comments:{
    type:Array,

}

})

module.exports=mongoose.model('Blog',BlogSchema);