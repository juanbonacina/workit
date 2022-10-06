import faker from 'faker';
faker.locale = 'es'

function generarUsuario(id){
    return{
        usuario: { 
                autor: {
                    id: faker.internet.email(),
                    nombre: faker.name.fullname(),
                    edad: faker.age.number(),
                    email: faker.internet.email(),
                    image: faker.image.avatar()
                },
                Comment:[{
                    id: faker.number.number(),
                    Text: faker.text.Text()
                }]
                
        }
    }
}

export {generarUsuario}











