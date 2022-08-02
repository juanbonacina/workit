
function elemnt(){
    const cliente = []
    const mascotas = []
    const libro= []


    const createPerson = document.getElementById("divPersona")
    let divInput = document.createElement('div')
    divInput.innerHTML = `
                            <div>
                                <input id="nombre" type="text">
                                <input id="apellido" type="text">
                                <input id="libros" type="text">
                                <input id="autores" type= "text">
                                <input id="mascotasNum" type= "num">
                                <input id="mascotas" type= "text">
                            </div>
    
                            `
    document.body.appendChild(createPerson);
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let libros = document.getElementById("libros").value;
    let autores = document.getElementById("autores").value;
    let mascota = document.getElementById("mascotas").value;
    let mascotaQty = document.getElementById("mascotasNum").value;

    class client {
        constructor(nombre, libros, autores, mascota){
            this.nombre = nombre;
            this.libros = libros;
            this.autores = autores;
            this.mascota = mascota;

        }
        mostrarCliente(){
            return `hola buenos dias ${nombre}, me encanta ${libros} del autor ${autores}, espero que tu ${mascota} se enciuentre muy bien :)`
            
        }
       
    }

    const addCliente =()=>{
        const newCliente = {"nombre":nombre,"apellido":apellido}
        cliente.push(newCliente)
    }

    const getFullName = ()=>{
        cliente.map((usuario)=>{
            `<p>nombre usuario: ${nombre}</p>
             <p>apellido: ${apellido}</p>`
        },[cliente])

    } ;
    const addMascotas = ()=>{
        const newMascota = {"mascota":mascota, "qty":mascotaQty}
        mascotas.push(newMascota)    
    } ;

    const countMascotas = mascotas.length
       
    
    const addbook = ()=> {
        const newBook = {"nombreLibro":libros,"autor": autores}
        libro.push(newBook)
    };
    const getBookNames = ()=>{
        libro.map((item)=>{
            `<p>autor:${item.autor}</p>
            <p>libro:${item.libro}</p>
            `
        },[libro])

    } ;
   
    const client1 = new client(nombre, libros, autores, mascota)
    console.log(client1)
}














