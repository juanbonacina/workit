import { json } from "express";

//modulo
const socket = io();

//elementos de mensajes
const mail = document.getElementById('mail');
const texto = document.getElementById('texto');
const nombreProducto = document.getElementById('nombreProducto');
const categoria = document.getElementById('categoria');
const precio = document.getElementById('precio');
const fecha = new Date().toDateString();

//cuerpos de los mensajes
const mensaje = {nombre: mail.value , texto: texto.value, fecha: fecha.value}
const productos = {nombre: nombreProducto.value, categoria: categoria.value, precio: precio.value};

//escuchar mensaje de bienvenida

socket.on('mi mensaje', data =>{ 
    alert(data);
})

//envio de mensajes

const enviar = document.getElementById('enviar');
const enviarProducto = document.getElementById('enviarProducto');

enviar.onclick(
    socket.emit('notificacion', mensaje)
);
enviarProducto.onclick(
    socket.emit('agregado', productos)
);

//funciones

function mostrarProducto(data){
    const elemento = JSON.parse(data , data.map((x)=>{
        return(
            `
            <h4>${data.nombre}</h4>
            <p>${data.categoria}</p>
            <p>$${data.precio}</p>
            `
        )
    }))
    document.getElementById('catalogo').innerHTML = elemento
};


function render(data){
    const elemnt = data.map((x)=>{
        return(
            `<h4>${x.mail}</h4>
             <p>${x.mensaje}</p><p>${x.fecha}</p>   `
        )
    }).join("");
    document.getElementById('chat').innerHTML= elemnt
};

//escuchar respuestas

socket.on('mensajes', function(data){render(data)});
socket.on('agregado', function(data){mostrarProducto(data)});
socket.on('productoId', function(data){mostrarProducto(data)});
