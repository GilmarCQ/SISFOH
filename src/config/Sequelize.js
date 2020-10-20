const Sequelize = require('sequelize');

const personaModel = require('./../models/Persona');
const condicionModel = require('./../models/Condicion');
const beneficioModel = require('./../models/Beneficio');
const programaSocialModel = require('./../models/ProgramaSocial');
const zonaModel = require('./../models/Zona');

const conexion = new Sequelize(
    'mdy', 'postgres', 'root', {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    }
);

const Persona = personaModel(conexion);
const Condicion = condicionModel(conexion);
const Beneficio = beneficioModel(conexion);
const ProgramaSocial = programaSocialModel(conexion);
const Zona = zonaModel(conexion);

module.exports = {
    conexion: conexion,
    Zona: Zona
};