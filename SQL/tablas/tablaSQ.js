const {ubicacionSQ} = require ('../conexiones/sqLite.js');
const knex = require('knex')(ubicacionSQ);
const {chat} = require ('../../sockets/server.js')

const conversacion = []
conversacion.push(chat);

knex.createTable('chat', table=>{
    table.increments('id')
    table.string('name')
    table.integer('text')
})

.then(()=>console.log('tabla creada'))
.catch((err)=>{console.log(err); throw new err})
.finally(()=>{
    knex.destroy();
});

function mostrarTablaChat(){
    (async()=>{
        try{
            let mensaje = await knex.from('chat').select('*')
            for(mensaje of mensajes) console.log(`${mensaje['id']} ${mensaje['name']} $${mensaje['text']}`)
        }
        catch(err){
            console.log(err)
        }
        finally{
            knex.destroy();
        }
    })

};

function agregarConversacion(){
    knex('chat').insert(conversacion);
        then(()=>console.log('tabla creada'))
        .catch((err)=>{console.log(err); throw new err})
        .finally(()=>{
            knex.destroy();
        });

}