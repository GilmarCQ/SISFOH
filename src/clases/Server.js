const express = require('express');
const bodyParser = require('body-parser');
const { conexion } = require('./../config/Sequelize');

const { zonaRouter } = require('../rutas/Zona');

class Server {
    constructor() {
        this.app = express();
        this.puerto = process.env.PORT || 5000;

        this.habilitarCors();
        this.configurarBodyParser();
        this.cargarRutas();

    }
    habilitarCors() {
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');
            next();
        });
    }
    configurarBodyParser() {
        this.app.use(bodyParser.json());
    }
    cargarRutas() {
        this.app.get('/', (req, res) => {
            res.status(200).send('LA API FUNCIONE... Use la API MDY.');
        });
        this.app.use('/zona', zonaRouter);
    }
    start() {
        this.app.listen(this.puerto, () => console.log(`Todo operativo en el puerto ${this.puerto}`));
        conexion.sync({ force: false }).then(() => {
            console.log('Base de datos sincronizada.');
        });
    }
}

module.exports = Server;