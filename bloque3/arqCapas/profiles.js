import mongoose from 'mongoose';
import { usuarios } from '../../bloque2/mongoDB/perfil';

const URL = 'mongodb://localhost:27017/ecommerce'
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('base conectada')


async function traerProfile(){
    let usuarios = usuarios.find({})
};

async function crearProfile(){
    let usuario = usuarioCreado;
    
    usuarioGuardar =  await usuario.save()
}

export default (traerProfile, crearProfile);