const express = require('express');
const fs = require('fs');

const server = express();

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');

server.get('/',(req, res)=>{
  res.write(home);
  res.end();
});

server.get('/about',(req, res)=>{
  res.write(about);
  res.end();
});


server.listen(8080, ()=>{
  console.log("Server is running on port "+ 8080);
});