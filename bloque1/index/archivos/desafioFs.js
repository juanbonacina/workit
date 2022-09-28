const fs = require ('fs');
const productoArray = productos

function makeProduct (){
    const divfs = document.getElementById("divFs");
    const newDiv = document.createElement('div');

    newDiv.innerHTML = `
                            <div>
                                <input id="nombre" type="text">
                                <input id="precio" type= "number">
                            </div>
    
                            `
    document.body.appendChild(divfs);
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    const item = {nombre, precio}

    const saveProducto = ()=>{

        let createId 
        if (productoArray == 0) {
            createId = 1
        }else{
            createId = productoArray[productoArray.length - 1].id + 1
        }
        const newItem = {id: createId, ...item}

        productoArray.push(newItem);

        try {
            fs.writeFileSync("./productos.js", productoArray)
            
        } catch (error) {
            throw new error (`algo a salido mal ${error}`)
        };

        deleteById()
    }
    const getAll = ()=>{
      try {
            const data1 = fs.readFileSync('./productos.js', 'utf-8');
            console.log(data1);
            
        } catch (error) {
            console.log('error', error)
        };          
    }
    const deleteById = (id)=>{
    
        const newArray  = productoArray.filter(x=> x.id != id )

        fs.writeFileSync("./productos.js", newArray)

    };

    const deleteAll = () =>{
        const emptyArray = productoArray([])

        fs.writeFileSync("./productos.js", emptyArray)
    }
    






}








