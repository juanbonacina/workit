// deno-lint-ignore-file
import {Application, config} from './deps.ts'
import { router } from './rutas/index.ts';
import { logger } from './funciones/loggers.ts';


const PORT = 8080
const app = new Application();

app.use(logger);
app.use(router.allowedMethods());

await app.listen({port: PORT}); 