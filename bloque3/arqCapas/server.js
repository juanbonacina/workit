import Express from "express";
import RouterDatos from "./rotes";


const app = Express()
app.use(Express.json())

app.use('/api/datos', RouterDatos)

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log('servidor escuchando');
})

server.on('error', Error=>console.log(`error ocurrido ${Error}`))