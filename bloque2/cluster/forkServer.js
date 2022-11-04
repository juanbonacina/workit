import {config} from './config';

process.on('server', msg=>{
    const server  = app.listen(config.server.PORT, ()=>{
        console.log(`se esta escuchado puerto: ${config.server.PORT}, numero id de lavor ${process.pid}`)
    })
})  