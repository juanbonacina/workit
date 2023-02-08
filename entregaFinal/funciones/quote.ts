// deno-lint-ignore-file
import { MongoClient } from "../deps.ts";
import { User } from "../daos/usersDao.ts";

const URL = "mongodb://127.0.0.1:27017";


const client = new MongoClient();
try {
    await client.connect(URL);
} catch (error) {
    error
}

const db = client.database("clientBase");
const comprador = db.collection<User>("cliente")


const getUsers = async ({response}: {response: any})=>{
    try {
        const allUsers = await comprador.find({}).toArray();
        if (allUsers) {
            response.status = 200;
            response.body = {
                success: true,
                data: allUsers,
            };
        } else {
            response.status = 500;
            response.body = {
                success: false,
                msg: 'lo sentimos no se han encontrado usuarios'
            };
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString(),
        }
    }
};

const getUserById = async ({
    params,
    response,
}: {
    params: {id: string};
    response : any;
}) =>{
    const user = await comprador.findOne({userId: params.id});
    if (user) {
        response.status = 200;
            response.body = {
                success: true,
                data: user,
            };
        } else {
            response.status = 500;
            response.body = {
                success: false,
                msg: 'lo sentimos no se han encontrado usuarios'
            };
    }
};

const createUser = async ({
    request,
    response,
}: {
    request: any,
    response: any,
})=>{
    try {
        if (!request.hasBody) {
            response.status = 400;
            response.body = {
                success: false,
                msg: 'no hay info'
            }
        } else {
            const body = await request.body();
            const user = await body.value;
            await comprador.insertOne(user);
            response.status = 201;
            response.body = {
                success: true,
                data: user
            }
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString(),
        }
    }
};
const updateUser = async ({
    params,
    request,
    response,
    }: {
        params: {id: string};
        request: any;
        response: any;
    })=>{
        try {
            const body = await request.body();
            const inputUser = await body.value;
            await comprador.updateOne(
                {userId: params.id},
                {userBody: inputUser});
            const userUpdate = await comprador.findOne({userId: params.id});
            response.status = 201;
            response.body = {
                success: true,
                data: userUpdate,
            };
        } catch (err) {
            response.body = {
                success: false,
                msg: err.toString(),
            }
        }
    };
const deleteUser = async ({
    params,
    response,
}:{
    params: {id: string};
    response: any;
})=>{
    try {
        await comprador.deleteOne({userId: params.id});
        response.status = 201;
        response.body = {
            success: true,
            msg: 'usuario eliminado',
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString(),
        }
    }
};

export {getUsers, getUserById, createUser, updateUser, deleteUser}
