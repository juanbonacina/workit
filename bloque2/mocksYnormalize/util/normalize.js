import normalizr from 'normalizr';
const normalizr =  normalizr.normalize();
const denormalize = normalizr.denormalize();
const schema = normalizr.schema();


const user = new schema.entity('usuario',{
    author: user,
    Comments: [Comment]
});
const Comment = new schema.entity('comment')


const util = require('util')

function print(objeto){
    console.log(util.inspect(objeto, false, 2, true))
}

