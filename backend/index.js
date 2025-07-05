const express=require('express');
const mongoose=require('mongoose');
const app=express();
require('./db/config');
const User=require('./db/User');
app.use(express.json());


app.post('/register',(req,resp)=>{
    const {name,email,password}=req.body;
    const user=new User({name,email,password});
    user.save().then(()=>{
        resp.send("User registered successfully");
    }).catch((error)=>{
        resp.status(500).send("Error registering user");
    });
})

app.listen(8080)