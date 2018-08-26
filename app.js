const geoposicion = require("./geoposicion");

const args = require("yargs").options({direccion:{
    alias: 'd',
    require: true,
    desc: 'direccion. Ejemplo: node app -d "Santiago de Compostela"'
}}).argv; 

geoposicion
    .getCoordenadas(args.direccion)
    .then( (infoCoordenadas)=> console.log(infoCoordenadas.latitud,infoCoordenadas.longitud) )
    .catch( (er) => console.log(er) )
