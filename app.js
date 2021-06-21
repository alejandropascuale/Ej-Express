const express = require('express');
const app = express();
const mainController = require('./controllers/mainController.js')

app.listen('3001', () => {
    console.log('Servidor funcionando en el puerto 3001');
})

app.use('/', mainController)