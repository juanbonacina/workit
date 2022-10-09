import admin from 'firebase-admin'

const db = admin.firestore();

export class ContenedorFirebase{
    constructor(nombreColeccion){
        this.coleccion = db.collection(nombreColeccion);
    }

    async create(object){
        try {
            const guardado = await this.coleccion.add(object);
            return({...object, id: guardado.id})
        } catch (error) {
            throw new error('lo sentimos algo salio mal, intente mas tarde')
        }
    };

    async listar(id){
        try {
            const doc = await this.coleccion.doc(id).get()
            if (!doc.exist) {
                throw new error('error, elemento no encontrado')
            } else {
                const data = doc.data();
                return{...data, id}
            }
        } catch (error) {
            throw new error('los sentimos algo salio mal, intente mas tarde')
        }
    };

    async listarAll(){
        try {
            const result = []
            const snapShot = await this.coleccion.get()
            snapShot.forEach(doc =>{
                result.push({id: doc.id, ...doc.data()})

            })
            return result;

        } catch (error) {
            throw new error('lo sentimos a ocurrido un error, intente mas tarde')
        }
    };

    async delete(id){
        try {
            const item = await this.coleccion.doc(id).delete()
            if (!item) {
                return 'no se a encontrado ningun elemento'
            } else {
                const list = []
                const snapShot = await this.coleccion.get()
                snapShot.forEach(doc =>{
                    list.push({id: doc.id, ...doc.data()})
                })
                return list
            }
        } catch (error) {
            
        }       
    }

    async deleteAll(){
        try {
            const lista = []
            const borrado = await this.coleccion.delete()
            lista.push(borrado)
            return lista
        } catch (error) {
            throw new error('lo sentimos, ha ocurrido un error, intente mas tarde')
        }
    }

    async update(object){
        try {
            const actualizado = await this.coleccion.doc(object.id).set(object)
            return actualizado
        } catch (error) {
            throw new error('lo sentimos a ocurrido un problema, intente mas tarde')
        }
    }

}