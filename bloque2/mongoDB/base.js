import mongoose from "mongoose";
import *  as model from "./perfil"


CRUD()


async function CRUD(){
    try{
        const URL = 'mongodb://localhost:27017/ecommerce'
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('base conectada')

        /*------------------------------------------------ */
        /*                  crear usuario                  */
        /*------------------------------------------------ */

        const usuario = {nombre: 'felipe', apellido:'gonzales', email:'fg@gmail.com', password: 3344};
        const usuarioGuardarModel = new model.usuarios(usuario);
        let usuarioGuardar = await usuarioGuardarModel.save()
        console.log(usuarioGuardar);

        /*--------------------------------------------------*/ 
        /*                       leer                       */
        /*--------------------------------------------------*/ 

        let usuarios = await model.usuarios.find({})
        console.log(usuarios);

        /*--------------------------------------------------*/
        /*                       UPDATE                     */
        /*--------------------------------------------------*/

        let usuarioUpdate = await model.usuarios.updateOne({nombre:'felipe'},
        {$set:{password: 12345}})

        console.log(usuarioUpdate);

        /*--------------------------------------------------*/
        /*                       READ                       */
        /*--------------------------------------------------*/

        usuarios = await model.usuarios.find({nombre:'felipe'});
        console.log(usuarios);

        /*--------------------------------------------------*/
        /*                       DELETE                     */
        /*--------------------------------------------------*/

        let usuarioDelete = await model.usuarios.deleteOne({nombre:'juan'})
        
    }  

    catch(error){
        console.log(`error en CRUD: ${error}`)
    }
}
