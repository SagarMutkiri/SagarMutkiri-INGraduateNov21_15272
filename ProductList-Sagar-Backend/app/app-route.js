const { Router } = require('express')

module.exports=app=>{
   const express=require('express');
   const Router = express();
   const ProductListController=require('./productlists.controller')

   Router.get('/productlists',ProductListController.findAll);
   Router.get('/productlists/:id',ProductListController.findByPK);
    Router.post('/productlists/add',ProductListController.createproductlists);
    Router.put('/productlists/update/:id',ProductListController.updateproductlists);
   Router.delete('/productlists/delete/:id',ProductListController.deleteproductlists);

    app.use('/app',Router );
}