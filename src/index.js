require('dotenv').config();
const {json} = require('body-parser');
const express = require('express');
const Post = require('./product');
const PORT =  process.env.PORT || 5000;
require('./config');


const app = express();
app.use(express.json());

app.post('/create',async(req,resp)=>{
    let data = new Post(req.body);
    let result = await data.save();
    resp.send(result);
});

app.post('/',async(req,resp)=>{
    resp.send('successful');
})

app.get('/list',async(req,resp)=>{
    let data = await Post.find();
    resp.send(data);
})

app.get('/list/:id',async(req,resp)=>{
    let data = await Post.find(req.params);
    resp.send(data);
})
app.listen(PORT);