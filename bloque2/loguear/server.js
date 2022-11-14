import Express, { Router } from "express";
import { config } from "./config";
import minimist from "minimist";
import log4js from "log4js";
const {fork} = require ('child_process');
const compression = require('compression')
const app = Router()
const parseArgs = minimist()
const args = parseArgs(process.argv.slice(2))

app.use(compression())
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
};

log4js.configure({
    appenders:{
        miLoggerInfo:{type:'console'},
        miLoggerWarning:{type:'warning',filename:'warning.log',},
        miLoggerError:{type:'error',filename:'error.log',},    
    },

    categories:{
        default:{appenders:['miLoggerInfo'], level:'info'},
        warn:{appenders:['miLoggerWarning'], level:'warn'},
        error:{appenders:['miLoggerError'], level:'error'},
    }
})

const logger = log4js.getLogger('defualt');
const loggerWarn = log4js.getLogger('warn');
const loggerError = log4js.getLogger('error')

/*---------------------------rutas------------------------*/

app.get('/info', getInfo)
app.get('/api/random/:num', (req, res)=>{
    try {
        const minimo = 1
        const maximo = 500000000
        const numero = Math.random(maximo - minimo)

        const forked = fork('fork.js')
        forked.on('message', msg=>{
            logger('mensaje hijo', msg)
        })
    
        
        console.log(`no es bloqueante el numero es: ${numero}`)
        setTimeout(()=>{
            forked.send({mensaje: 'hola'})
        }, 2000)
    } catch (error) {
        error = loggerError('error del sistema, intente mas tarde')
    }
    
})

/*------------------------------------------------------ */
const options = {alias :{PORT : config.server.PORT}}

const server  = app.listen(config.server.PORT, ()=>{
    console.log("se esta escuchado",parseArgs(['-PORT']))
})
