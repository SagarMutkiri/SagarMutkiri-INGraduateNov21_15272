const express=require('express');
const app = express();
const port = 3000;

app.get('/',(req,resp)=>{
    resp.sendFile(__dirname+"/index.html");
});

app.post('/register',(req,resp)=>{
    
    resp.sendFile(__dirname+"/success.html");
});

// app.post('/register',(req,resp)=>{
//     resp.sendFile(__dirname+"/error.html");
// });



// app.post('/register',(req,resp)=>{  
//     if(resp.status(200).sendFile(__dirname+"/success.html"));


//     else if(resp.status(404).redirect(__dirname+"/error.html"))
//     {
//         //resp.sendFile(__dirname+"/error.html");
//     }
// });



app.listen(port,()=>{

        console.log(`http://localhost:${port} Express is started `);;
});