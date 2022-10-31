import Express, { Router } from "express";
import { config } from "./config";
import minimist from "minimist";
const {fork} = require ('child_process');

const app = Router()
const parseArgs = minimist()
const args = parseArgs(process.argv.slice(2))
/*-------------------------funciones----------------------*/
function getInfo(req, res){
    const infoDB = []
    const id = process.pid;
    const version = process.version;
    const titulo = process.title;
    const plataforma = process.platform;
    const plantilla = process.cwd();
    const path = process.execPath();
    const memoria = process.memoryUsage()
    const newObj = {id, version, titulo, plataforma, plantilla, path, memoria};
    infoDB.push(newObj);
    print(infoDB);
}

/*---------------------------rutas------------------------*/

app.get('/info', getInfo)
app.get('/api/random/:num', (req, res)=>{
    const minimo = 1
    const maximo = 500000000
    const numero = Math.random(maximo - minimo)

    const forked = fork('fork.js')
    forked.on('message', msg=>{
        console.log('mensaje hijo', msg)
    })
   
   console.log(`no es bloqueante el numero es: ${numero}`)
   setTimeout(()=>{
    forked.send({mensaje: 'hola'})
   }, 2000)
})

/*------------------------------------------------------ */
const options = {alias :{PORT : config.server.PORT}}

const server  = app.listen(config.server.PORT, ()=>{
    console.log("se esta escuchado",parseArgs(['-PORT']))
})
