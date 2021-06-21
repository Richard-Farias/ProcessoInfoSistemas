const express = require('express');
const routes = express.Router();

const controllerVeiculos = require('../ControllerApiVeiculos/controllerVeiculos');

routes.post('/', controllerVeiculos.create);
routes.get('/', controllerVeiculos.index);
routes.delete("/delete/:id", controllerVeiculos.delete);
routes.put('/alterar/:id', controllerVeiculos.update);
module.exports = routes;