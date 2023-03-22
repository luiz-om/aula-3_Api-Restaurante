const express = require('express');

const restaurente = express()
require('./db/mongodb')
restaurente.use(express.json())


//importacao de rotas
const MesaRouter = require('./routes/MesaRoute.js')
restaurente.use(MesaRouter)
const AtendenteRoute = require('./routes/AtendenteRoute.js')
restaurente.use(AtendenteRoute)


//Inicializacao do banco
const carregaModels = require('../models/index')
carregaModels()
//inicializacao da API
restaurente.listen(4000,()=>{
    console.log('Api rodando');
})