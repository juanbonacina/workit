import faker from 'faker';
faker.locale = 'es';

function generadorProducto(){
    return{
        nombre: faker.name.fullname(),
        precio: faker.number.price(),
        image: faker.image.avatar(),
    }
}

export {generadorProducto}
