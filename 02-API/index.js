const express = require('express');
const app = express();
const PORT = 3000;
const request = require('request');

app.get('/', (req, res) => res.send('Hola Mundo!'));

// app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`)); 





// 1.- Agrega un endpoint ‘/api/’ que responda a 
//         una petición de tipo GET con un código de estado 200 
//         y el siguiente json: 
app.get('/api/', (request, response) => {
    response.status(222).json({ mensaje: 'sup'});
})    

//     2.- Agrega un endpoint ‘/api/suma’ que responda a una 
//         petición de tipo GET con la suma de dos números que 
//         reciba mediante las querys num1 y num2. El servidor
//         debe responder con un código de estado 200 y un json 
//         como el siguiente:
//                         {‘resultado’: 7}



app.get('/api/suma', (request, response) => {
    const {num1, num2} = request.query;
    const resultado = parseInt(num1) + parseInt(num2);
    response.status(200).json({ resultado: resultado  });
})  


//     3.- Agrega un endpoint ‘/api/usuario/’ que responda a
//         una petición de tipo GET con el nombre que sea 
//         recibido a través de params. El servidor debe responder
//         con un código de estado 200 y un json como este:
//                       {‘usuario’: ‘Edwin’}

app.get('/api/usuario/:nombreUsuario', (request, response) => {
    const nombreUsuario = request.params;
    response.status(200).json({ usuario: nombreUsuario });
})  

//     4.- Agrega un endpoint ‘/api/swapi’ que responda a una
//         petición de tipo GET con el personaje solicitado de 
//                         https://swapi.co/
//         El cliente debe mandar el número de personaje mediante
//         params. La respuesta del servidor debe lucir algo así
//                     {‘personaje’: {
//                         ‘name’: ‘Luke Skywalker’,
//                         ...,
//                     }}

// app.get('/api/swapi/:character', (request, response) => {
//     const { character } = request.params;
//     const SWAPI_URL = `https://swapi.dev/api/people/${character}/`;
//     request.get(SWAPI_URL, (err, resSWAPI, body) => {
//         if (resSWAPI.statusCode === 200) {
//         const json = JSON.parse(body);
//         res.status(200).json({ character: jason });
//         } 
//     });  
// })  

app.get('/api/swapi/:character', (req, res) => {
    const { character } = req.params;
    const SWAPI_URL = `https://swapi.dev/api/people/${character}/`;
    request.get(SWAPI_URL, (err, resSWAPI, body) => {
      if (resSWAPI.statusCode === 200) {
        const json = JSON.parse(body);
        res.status(200).json({ character: json });
      }
    });
  });

  
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

// const API_URL = ''
// request.get(API_URL, () => {});

// const BR_BA_QUOTES = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
// request.get(BR_BA_QUOTES, (err, res, body) => {
//   if (res.statusCode === 200) console.log(body);
//   else console.log(err);
// });