const express = require('express');
const app = express();
const path = require('path');
const publicFolder = path.resolve(__dirname, './public');
app.use(express.static(publicFolder));

const mainRouter = require('./routes/main')


app.listen(3001, () => {
    console.log('Servidor funcionando en el puerto 3001');
})

app.use('/', mainRouter);