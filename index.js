require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT||4000;

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/RO',(req,res)=>{
    res.send("<h1><center>ROHITH SHARMA WILL THE CAPTAIN OF INDIAN IN 2027</center></h1>")
})

app.listen(port,()=>{
    console.log("server is running on oport "+port);
})