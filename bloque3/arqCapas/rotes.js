import { Router } from "express";
import {crearDatoController, traerDatos} from "./controllers";

const RouterDatos = new Router();

RouterDatos.get('/', traerDatos);
RouterDatos.post('/', crearDatoController);

export default RouterDatos;