
function elemnt(){
    const createPerson = document.getElementById("divPersona")
    let divInput = document.createElement('div')
    divInput.innerHTML = `
                            <div>
                                <input id="nombre" type="text">
                                <input id="apellido" type="text">
                                <input id="libros" type="text">
                                <input id="autores">
                                <input id="mascotasNum">
                                <input id="mascotas">
                            </div>
    
                            `
    document.body.appendChild(createPerson);
    
    let nombre = document.getElementById("nombre").value;
    let libros = document.getElementById("libros").value;
    let autores = document.getElementById("autores").value;
    let mascotas = document.getElementById("mascotas").value;

    class client {
        constructor(nombre, libros, autores, mascotas){
            this.nombre = nombre;
            this.libros = libros;
            this.autores = autores;
            this.mascotas = mascotas;

        }
        mostrarCliente(){
            return `hola buenos dias ${nombre}, me encanta ${libros} del autor ${autores}, espero que tu ${mascotas} se enciuentre muy bien :)`
            
        }
       
    }
   
    const client1 = new client(nombre, libros, autores, mascotas)
    console.log(client1)
}














