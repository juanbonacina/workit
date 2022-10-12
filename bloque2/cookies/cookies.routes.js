import Router from "express";

const appCokies = Router();

function auth(req, res, next){
    if(req.session?.user === req.query && req.session?.admin){
        return next()
    }
    return res.status(401).send('error al autenticar')
}



appCokies.get('/login', (req, res)=>{
    const {username, password} = req.query
    if(username !== req.query || password !== req.query){
        return res.send('login failed')
    }
    req.session.user = username
    req.session.admin = true
    res.send('login succes')
});

appCokies.get('/logout', (req, res)=>{
    req.session.destroy(err=>{
        if(err){
            return res.json({status: 'logout: error', body: err})
        }
        res.send('logout ok')
    })
    
});

appCokies.get('/auth', auth, (req, res)=>{
    res.send('autenticado')
});

appCokies.get('/savesession', (req, res)=>{
    if (req.session.contador){
        req.session.contador ++
        res.send('Gracias por estar otra ve con nosotros')
    } else {
        req.session.contador = 1
        res.send('BIENVENIDO')
    }
});

export default appCokies;