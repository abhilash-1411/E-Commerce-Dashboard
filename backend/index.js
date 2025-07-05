const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
require('./db/config');
const User=require('./db/User');


app.use(express.json());
app.use(cors({ origin: '*' }));

app.post('/register',(req,resp)=>{
    const {name,email,password}=req.body;
    const user=new User({name,email,password});
    user.save().then(()=>{
        resp.send({message:"User registered successfully",user});
    }).catch((error)=>{
        resp.status(500).send({message:"Error registering user",error});
    });
})

app.listen(8080)