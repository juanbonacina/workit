process.on('message', msg =>{
    const param = req.param; 
    const min = 1;
    
    console.log('proceso hijo:', msg)
    if (param) {
        const numFin =  Math.random(max - min)
        const max = param;
        process.send({contador: numFin})
    } else {
        const numFin = Math.random(max - min)
        const max = 100000000;
        process.send({contador: numFin})
    }
    
})
