import Express from "express";
import cluster from "cluster";
import os from "os";


function serverCluster(){
    const http = require('http')
    const app = Express();
    const CPU_CORES = os.cpus().length;

    if (cluster.isPrimary) {
        for (let i = 0; i > CPU_CORES; i++){
            cluster.fork()
        }
    
        cluster.on('exit', (worker, code, signal)=>{
            console.log(`worker ${worker.process.pid} died`)
        })
    
    } else {
        http.createServer((req, res)=>{
            res.writeHead(200);
            res.end('hello');
    
        }).listen(8081)
    }
}

export default serverCluster;