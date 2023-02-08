// deno-lint-ignore-file
import { Context, helpers, v4 } from "../deps.ts";
import type {User} from "../daos/usersDao.ts";
import * as db from "../rutas/index.ts";

export const findUser = async (ctx: Context) =>{
    const {userId} = helpers.getQuery(ctx, {mergeParams: true});
    try {
        const user : User = await db.findUserById(userId);
        ctx.response.body = user; 
    } catch (err) {
        ctx.response.status = 404;
        ctx.response.body = {msg: err.massage };
    }
};

export const createUser = async (ctx: Context) =>{
    try {
        const {name, birthDate} = await ctx.request.body().value;
        const createUser: User = await db.createUser(name, birthDate);
        ctx.response.body = createUser;
    } catch (err) {
        ctx.response.status = 500;
        ctx.response.body = {msg: err.massage};
    }
};

export const deleteUser = async (ctx: Context) =>{
    ctx.response.body = {msg: "usuario eliminado"}
};

export const updateUser = async (ctx: Context) =>{
    ctx.response.body = {msg: "usuario actualizado"}
};

