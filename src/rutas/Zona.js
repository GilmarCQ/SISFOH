const express = require('express');
const Zona = require('../controladores/Zona');
const zonaRouter = express.Router();

zonaRouter.post('/agregar', Zona.agregarZona);
zonaRouter.get('/listar', Zona.listarZonas);
zonaRouter.get('/buscar/:id', Zona.buscarZona);
zonaRouter.delete('/eliminar/:id', Zona.eliminarZona);
zonaRouter.put('/editar', Zona.editarZona);


module.exports = {
    zonaRouter
};