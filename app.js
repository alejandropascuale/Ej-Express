const express = require('express');
const app = express();
const path = require('path');
const publicFolder = path.resolve(__dirname, './public');
app.use(express.static(publicFolder));
const mainController = require('./controllers/mainController')

app.listen('3001', () => {
    console.log('Servidor funcionando en el puerto 3001');
})

app.use('/', mainController)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})