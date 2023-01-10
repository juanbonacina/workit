import Express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Persona{
        id: ID!
        nombre: string,
        edad: int
    }
    input PersonaInput{
        nombre: string,
        edad: int
    }
    type Query{
        getPersona (id: ID!): persona,
        getPersonas (campo: string, valor: string): [persona],
    }
    type Mutation{
        createPersona (datos: PersonaInput): Persona
        updatePersona (id: ID!, datos: PersonaInput): Persona,
        deletePersona (id: ID!): Persona,
    }
`);

class Persona{
    constructor(id, {nombre, edad}){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
}

const personaMap = {};

function getPersonas({campo, valor}){
    const personas = Object.values(personaMap)
    if (campo && valor) {
        return personas.filter(p => p[ campo ] == valor)
    } else {
        return personas;
    }
}

function getPersona({id}){
    if (!personaMap [id]) {
        throw new Error ('Perdon no se encontro a la persona');
    }
    return personaMap [ id ];
}

function createPersona({datos}){
    const id = crypto.randomBytes(10).toString('hex');
    const nuevaPersona = new Persona(id, datos)
    personaMap [id] = nuevaPersona;
    return nuevaPersona;
}

function updatePersona({id, datos}){
    if (!personaMap [id]){
        throw new Error ('perona not found');
    }
    const personaActualizada = new Persona(id, datos)
    personaMap [id] = personaActualizada;
    return personaActualizada;
}

function deletePersona({id}){
    if (!personaMap [id]){
        throw new Error ('perona not found');
    }
    const personaBorrada = personaMap [id];
    delete personaMap [id];
    return personaBorrada;
}

const app = Express();

app.use(Express.static ('public'));

app.use('/graphQL', graphqlHTTP({
    schema: schema,
    rootValue:  {
        getPersona,
        getPersonas,
        createPersona,
        updatePersona,
        deletePersona
    },
    graphiql: true,
}));


const PORT = 8080
app.listen(PORT, ()=>{
    const msg = `Servidor escuchando ${PORT}`;
})







