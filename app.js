const geoposicion = require("./geoposicion");
const tiempo = require("./tiempo");

const args = require("yargs").options({direccion:{
    alias: 'd',
    require: true,
    desc: 'direccion. Ejemplo: node app -d "Santiago de Compostela"'
}}).argv; 

geoposicion
    .getCoordenadas(args.direccion)
    .then( (infoCoordenadas)=> tiempo.getTemperatura(infoCoordenadas.latitud,infoCoordenadas.longitud) )
    .then( (infoTiempo) => { console.log(`Temperatura: $(infoTiempo)º `) } )
    .catch( (er) => console.log(er) )
