//Confirguración
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const api = express();
const PORT = process.env.PORT || 3000;

// Conexion a la base de datos

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log('conectado a la base de datos'))
    .catch(() => console.log('NO conectado a la base de datos'));

// Generar un esquema -> Definición de las reglas de una colección

const flightsSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true,
    },
    aircraft_name: {
        type: String,
        required: true,
    },

    aircraft_model: Number,

    flight_from: {
        type: String,
        required: true,
    }
});

// Generar un modelo a partir de un esquema -> Objeto que nos permite interactuar con la colección

const Flights = mongoose.model('Flights', flightsSchema);

api.use(express.urlencoded({ extended : true}));
api.use(express.json({ extended : true}));

// Endpoints

api.get('/', (req, res) => res.status(200).json({ message: "it's alive!"}));

// Create

api.post('/api/flights', (req, res) => {
    // 1) Recibir el animal que se quiere crear desde el cliente
    const { body } = req;

    // 2) Pedirle a la base de datos que guarde el nuevo animal
    const newFlight = new Flights(body);
    newFlight.save()
    

    // 3) Con la respuesta que recibamos de la base de datos, le respondemos al cliente 
    .then((resMongo) => res.status(201).json(resMongo))
    .catch((err) => res.status(400).json(err))
});

// Read All

// Read One

// Update 

// Delete 

// Encender el servidor

api.listen(PORT, () => console.log(`Listenin on ${PORT}`))