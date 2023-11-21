const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
    blog_title : {
        type : String,
        required : true,
    },
    blog_description : {
        type : String,
        required : true,
    },
    blog_category : {
        type : String,
        required : true,
    },
    blog_thumbnail : {
        type : String,
        required : true,
    },
    
},{
    timestamps : true,
})

const blogmodel = mongoose.model("Blogs", blogsSchema);
module.exports = blogmodel;