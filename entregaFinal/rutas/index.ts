// deno-lint-ignore-file
import { Router } from "../deps.ts";
import {getUsers, getUserById, createUser, updateUser, deleteUser}from "../funciones/quote.ts"

export const router = new Router();
    
router
    .get("/api/users", getUsers)
    .get("/api/users/:userId", getUserById)
    .delete("/api/susers/:userId", deleteUser)
    .patch("api/users/:usuarioId", updateUser)
    .post("api/users", createUser);
