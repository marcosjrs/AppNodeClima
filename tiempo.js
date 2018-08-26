//Utilizamos el servicio de openweathermap para obtener el tiempo de unas coordenadas determinadas (https://openweathermap.org/current)
const axios = require("axios");
API_ID = "AQUI SE PONE LA CLAVE";

const getTemperatura = async (lat, lon) => {
    let urlQuery = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_ID}` ;
    let resp = await axios.get(urlQuery);         
    if(!resp.data) {
        throw new Error(`No se encontró datos para ${lat},${lon}`);
    }  
    return resp.data.main.temp;  
}

module.exports = {
    getTemperatura
};