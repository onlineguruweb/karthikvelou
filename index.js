const express = require('express');
const app = express();
const router = require("./Routes/route");
const path = require('path');
require('dotenv').config();



app.use("/api",router);

app.use(express.static(path.join(__dirname,'/Views/mern-stack/build')));

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, "Views/mern-stack/build/", 'index.html')); 
});


const PORT = process.env.port || 4000;

app.listen(PORT,()=>{console.log(path.join('Server is running on '+PORT));});
