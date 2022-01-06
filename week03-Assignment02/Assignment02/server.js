const express = require('express');
const port = 3000;
const app= express();

app.get('/',(req,resp)=>{
    resp.send("Called : Get Method from server.js File");
});

app.put('/',(req,resp)=>{
    resp.send("Called : PUT Method from server.js File");
});

app.post('/',(req,resp)=>{
    resp.send("Called : POST Method from server.js File");
});

app.delete('/',(req,resp)=>{
    resp.send("Called : DELETE Method from server.js File");
});

app.listen(port,()=>{
    console.log(`http://localhost:${port} Express server started`);;
  
})