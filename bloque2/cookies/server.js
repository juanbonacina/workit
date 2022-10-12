import express from 'express';
import session from  'express-session';
import appCokies from './cookies.routes';

const mongoStore = require('connect-mongo')
const advanceOptions = {useNewUrlParser: true, useUnifiedTopology: true}
const cookieParse = require ('cookie-parse')
const fileStore = require('session-file-store')(session)
const app  = express()
 
var PORT = process.env.port || 3000

app.use('app/session', appCokies)

app.use(cookieParse())

app.use(session({
    store: mongoStore.create({
        mongoUrl:'https://cloud.mongodb.com/v2/6347293391ab13578cc94705#clusters/edit?filter=starter&fromPathSelector=true', 
        mongoOptions: advanceOptions}),

    secret:'secreto',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 10000
    }
}))

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));

