const express = require('express');
const DBConnection = require('./DBConnection')
const utils =require('./utils')
const router = expressssss.Router()

router.get('/product',(request,response)=>{
    const statement=`select * from Products`;
    const  connection=DBConnection.connect;
    connection.query(statement,(error,products)=>{
        connection.end();
        response.send(utils.createResponse(error,products));
    });

})
