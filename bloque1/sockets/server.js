//modulos
const express = require ('express');
const { Server: IOServer } = require('socket.io');
const {Server: HttpServer} = require('http');
const path = require('path');

//configuaraion
const productos = []
const chat = []

const app = express()
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//middleware

app.use(express.static('./public'));
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//sockets

io.on('connection', (socket)=>{
    console.log("usuario conectado");
    socket.emit('mi mensaje', 'hola usuario')
})

socket.on('notificacion', data =>{
    console.log(data);
    chat.push(data);
    io.sockets.emit('mensajes', chat)
});

socket.on('agregado', data=>{
    console.log(data);
    productos.push(data);
    io.sockets.emit('productos', productos)
})


httpServer.listen(8080, ()=>console.log("escuchando puerto"))

