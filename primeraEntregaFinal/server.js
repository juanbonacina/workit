//modulos
const express = require ('express');
const { Server: IOServer } = require('socket.io');
const {Server: HttpServer} = require('http');
const path = require('path');
import modificadores from './serverJs/modificadores';


const items = modificadores.listAll();
const arrItems = [];
arrItems.push(items);

//configuaraion
const productos = []
const chat = []
const carrito = []

const app = express()
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);


//router base

app.use(express.static('./public'));
app.get("/chat", (req, res)=>{
    res.sendFile(path.join(__dirname, '/primeraEntregaFinal', 'index.html'))
});

app.get("/:id", (req, res)=>{
    const id  = req.params.id;
    const encontrado = arrItems.find(id)
    if (encontrado == true){
        let productoTraido = modificadores.traerPorId()
        res.status(201).json(productoTraido)
    } else {
        const todo = modificadores.listAll()
        res.status(201).json(todo)
    }
})

app.post("/", (req, res)=>{
    const nuevoProducto = req.body;
    const agregado = modificadores.guardar(nuevoProducto);
    res.send(alert('producto agregado'))
})

app.put("/:id", (req, res)=>{
    const id = req.params.id;
    if (arrItems.find(id)) {
        req.body = modificadores.actualizar();
        res.send(alert("producto actualizado"))
    } else {
        const err = new error("no se encontro un producto")
    }
    
});

app.delete("/:id", (req, res)=>{
    const id = req.params.id;
    const newArr = [];
    const arrFiltrado = arrItems.filter(!id);
    newArr.push(arrFiltrado);
    res.status(201).send(newArr);
    res.send(alert("item eliminado"))
})

//carrito

app.get("api/carrito/:id/productos", (req, res)=>{
    const id  = req.params.id;
    const encontrado = carrito.find(id)
    if (encontrado == true){
        res.status(201).json(encontrado)
    } else {
        res.status(201).json(carrito)
    }

})
app.post("api/carrito/:id", (req, res)=>{
    const nuevoProducto = req.body;
    const agregado = carrito.push(nuevoProducto);
    res.send(alert('producto agregado'))
    res.status(201).send(carrito)

})
app.delete("api/carrito/:id", (req, res)=>{
    const id = req.params.id;
    const newArr = [];
    const arrFiltrado = carrito.filter(!id);
    newArr.push(arrFiltrado);
    res.status(201).send(newArr);
    res.send(alert("item eliminado"))
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
