const express = require('express');
const bodyParser = require('body-parser');
const categoryRouter = require('./category');
const productRouter = require('./product');

const app = expressss();
app.use(function(req,res,next)
{
    res.header("Accesss-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-TypeError,Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(categoryRouter);
app.use(productRouter);

app.listen(3000,'0.0.0.0',()=>{
    console.log("server started on port number 3000");
});
