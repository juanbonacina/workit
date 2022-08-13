const { request, response } = require('express');
const express = require('express');
const items = require('./index/archivos/entrega');

const itm = new items
let max = 20;


let x = Math.floor(Math.random()*max)

const app = express;

app.get('/item', (request, response)=>{
    response.send(itm.traerPorId(x));

})

app.get('/productos', (request, response)=>{
    response.send(itm.listAll());
});
 
app.get('*', (request, response)=>{
    response.send('error 404 - not found');
})

const server = app.listen(8080, ()=>{
    console.log('server')
})



