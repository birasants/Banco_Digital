<<<<<<< HEAD
=======
const express = require('express');
const rotas = require('./rotas');
const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3000)
>>>>>>> 4c89bb9ba9c7afd87761872c83fdc9c95111df6a
