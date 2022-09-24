const express = require('express');
const app = express();

app.get("/",(req,res)=>{ res.send("I am node js server");});
app.listen(4000,()=>{console.log("I am listening 4000");});
