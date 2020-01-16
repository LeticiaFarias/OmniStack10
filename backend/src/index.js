const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://leticia:OmniStack@cluster0-rey68.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

app.use(express.json());//precisa vir antes das rotas

app.use(routes);


app.listen(3333);

//Métodos HTTP: GET, POST, PUT DELETE

// Tipos de parametros: 
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração, remoção)
// Body: request.body (Dados para alteração, criação de um registro)

//MongoDB (não-relacional)