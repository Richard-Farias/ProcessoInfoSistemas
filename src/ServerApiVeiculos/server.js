const express = require('express');
const app = express();
const route = require('../RoutesApiVeiculos/router'); // Verificar
const cors = require('cors');

app.use(express.json());
app.use(cors());

const server = require('http').Server(app); 
app.use(route);

server.listen(process.env.PORT || 1808);
    