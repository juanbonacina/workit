/*==============================imports===================================*/
import Express, { Router }  from "express";
import session from "express-session";
import ExpressHandlebars from "express-handlebars";
import Path from "mongoose";
import passport from "passport";
import { Strategy } from "passport-local";
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
/*==============================mosdulos===================================*/
const app = Express()
const exphbs = ExpressHandlebars;
const LocalStrategy = Strategy;
/*============================base de datos================================*/
async function usuarioDB(){
    const URL = 'mongodb://localhost:27017/ecommerce'
    const baseMongo = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
}
/*=============================middleware==================================*/
app.use(Express.urlencoded({extended:true}))
app.use(Express.json())
/*------------motor de plantilla-----------------*/
app.set('views', './views');
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutDir: Path.join(app.get('views'), 'layout'),
    extname:'.hbs'
}));
app.set('view engine', '.hbs');
/*------------motor de session------------------*/
app.use(session({
    secret:process.env.secretKey,
    resave:false,
    cookie:{
        maxAge: 1000000
    }
}))
/*--------------bcrypt------------------------*/

async function generateHashPassword(password){
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword
}

async function verifyPass(usuario, password){
    const match = await bcrypt.compare(password, usuario.password)
    return match;
}

/*------------config de passport----------------*/
passport.use(new LocalStrategy(
    async function(username, password, done) {
      const usuarioExiste = usuarioDB.find(usuario => usuario.userName == username && usuario.password == password);
      if (!usuarioExiste){
        return done(null, false);
      } else {

        const match = await verifyPass(usuarioExiste, password)

        if(!match){
            return(null, false)
        };
        return done(null, usuarioExiste);

      }
    }
  ));

passport.serializeUser((usuario, done)=>{
    done(null, usuario.userName)
})


passport.deserializeUser((userName, done)=>{
    const usuarioExiste = usuarioDB.find(usuario => usuario.userName == userName);
    done(null, usuarioExiste);
})
/*---------------funciones passport------------------*/
function isAuth(req, res, next){
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/login')
    }
};
function getRoot(req, res){
    res.send('bienvenido')
}

function getLogIn(req, res){
    res.render('/login')
}

function getSingUp(req, res){
    res.render("/registro")
}

function postLogIn(req, res){
    
    if (req.isAuthenticated()) {
        let user = req.user
        res.render('/datos')
    } else {
        res.render('/login')
    }
}

async function postSingUp(req, res){
    const {userName, password, direction} = req.body
    const usuario = await usuarioDB.find(usr => usr.userName == userName)
    if (usuario) {
        res.render('usuario ya existe')
    } else {
        const newUser = {userName: userName, password: await generateHashPassword(password), direction: direction};
        usuarioDB.save(newUser);
        res.render('login')
    }
}

function failLogIn(req, res){
    res.render('/login-error')
}

function failSingUp(req, res){
    res.render('registro-error')
}

function logout(req, res){
    req.logout();
    res.render('/login')
}

/*===============================rutas=====================================*/
app.get('/', getRoot())

app.get("/login", getLogIn())

app.get("/logout", logout())

app.get("/register",getSingUp())

app.get("/datos", isAuth, (req, res)=>{

    if (!req.user.contador) {
        req.user.contador = 1
    } else {
        req.user.contador ++
    }

    const datos = usuarioDB.find(req.user.userName);
    if (datos) {
        res.render('datos.hbs', datos)
    } else {
        res.redirect('/login')
    }
})

app.post("/login",passport.authenticate('local', {successRedirect:'/datos', failureRedirect:'/login-error'}, postLogIn()))


app.post("/register",passport.authenticate('local',{successRedirect:'/login', failureRedirect:'/registro-erro'} ,postSingUp()))

app.get('/login-error', failLogIn())
app.get('/registro-error', failSingUp())

/*==============================servidor===================================*/
const PORT = 4141
const server = app.listen(PORT, ()=>{
    console.log('server escuchando');
})

server.on('error', error=>{
    console.error('error en el servidor')
})