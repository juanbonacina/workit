const express = require("express");
const app = express();


app.get("/mensaje", (req, res)=>{
    res.send("servidor funcionando desd heroku")
})

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, ()=>{
    console.log(`server en puerto: ${PORT}`)
});

server.on("error", Error => console.log(`error en el servidor ${Error}`));