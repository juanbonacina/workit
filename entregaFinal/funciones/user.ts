// deno-lint-ignore-file
import {Uuid, User} from '../daos/usersDao.ts';
import { v4 } from '../deps.ts';

export const findUserById = async (Uuid: Uuid): Promise<User> => new Promise((resolve, reject) => {
    const userId = Uuid;
    if (Uuid !== userId) {
        throw new Error("usuario no encontrado")
    } else{
        setTimeout(()=>{
            resolve({
                Uuid,
                name: "",
                birthDate: new Date(),
            });
        }, 50)
    }
});

export const createUser = async(
    name: string,
    birthDate: Date,
): Promise<User> => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            uuid:v4.generate(),
            name,
            birthDate,
        }),
    }, 50)
});