const axios = require("axios");
//Utilizamos el API de googlemaps para obtener las coordenadas al pasarle una dirección. (https://developers.google.com/maps/documentation/geocoding/start)
const API_KEY = "AQUI SE PONE LA CLAVE DE CADA UNO";


let getCoordenadas = async (direccion)=>{
    let urlQuery = `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${API_KEY}`;
    const resp = await axios.get(urlQuery);
    if(resp.status == "OK"){
        throw new Error(`No se encontró datos para ${direccion}`);
    }
    const informacion = resp.data.results[0];      
    return {
        direccion: informacion.formatted_address,
        longitud : informacion.geometry.location.lng,
        latitud : informacion.geometry.location.lat
    };
}

module.exports = {
    getCoordenadas
}
