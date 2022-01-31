const express = require('express');
const server = express();
const port = 3000;
const cors = require('cors');
const CORS_OPTIONS={origin:'http://localhost:4200'};
server.use(cors(CORS_OPTIONS));
server.use(express.json());
server.use(express.urlencoded({extended:true}));


const DB=require('../backend/db/models');
	DB.sequelize.sync();

// default route with GET Method:: http://localhost:3500/
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","application/json");
    resp.send({message:"Welcome to web-api ProductList created using Express Sequelize Postgre"});
})



//Register app-route with server and register '/app' to default URI :: http://localhost:3500/app/
// To register a sub-route '/app' with the URI
require('./app/app-route')(server);
// require('/app/cartitemlists-route')(server);

server.listen(port,()=>{
    console.log(`http://localhost:${port} started`)
})