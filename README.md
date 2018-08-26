APPNodeClima
===========

Se trata de una aplicación supersimple, con fines educativos, donde se utiliza axios para acceder a las API de geolocalización de Google y al servicio de openweathermaps para obtener la temperatura. En realidad se podría obtener todo con la API de openweathermaps. 

Por otra parte se utiliza la librería de yargs porque nos da mucha flexibilidad a la hora de pasar parametros por consola, así como de mostrar información sobre los mismos. Como ejemplo, y previo instalación con
```
    node install
```
se puede ejecutar:
```
    node app
```
Para mostrar dicha ayuda.

Si lo que pretendemos es ver el funcionamiento final, podríamos ejecutar, por ejemplo:

```
node app -d "Santiago de Compostela"
```