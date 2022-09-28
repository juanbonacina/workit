const {ubicacionMaria} = require ('../conexiones/mariaDB');
const knex = require('knex')(ubicacionMaria);
const productos = require ('../../index/archivos/productos.json')

const listaProductos = []
const yaSubidos = JSON.parse(productos)
listaProductos.push(yaSubidos);

knex.createTable('productos', table=>{
    table.increments('id')
    table.string('name')
    table.integer('price')
})

.then(()=>console.log('tabla creada'))
.catch((err)=>{console.log(err); throw new err})
.finally(()=>{
    knex.destroy();
});

function mostrarTabla(){
    (async()=>{
        try{
            let products = await knex.from('productos').select('*')
            for(product of products) console.log(`${product['id']} ${product['name']} $${product['price']}`)
        }
        catch(err){
            console.log(err)
        }
        finally{
            knex.destroy();
        }
    })

};

function agregarProductos(){
    knex('productos').insert(listaProductos);
        then(()=>console.log('tabla creada'))
        .catch((err)=>{console.log(err); throw new err})
        .finally(()=>{
            knex.destroy();
        });

}


