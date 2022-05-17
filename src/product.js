const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
 userId:Number,
 id:Number,
 title:String,
 body:String
},{versionKey:false});

module.exports = mongoose.model('posts',PostSchema);
