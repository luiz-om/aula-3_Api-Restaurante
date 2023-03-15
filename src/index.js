const express = require('express');

const restaurente = express()

restaurente.use(express.json())


//importacao de rotas
const MesaRouter = require('./routes/MesaRoute.js')


restaurente.use(MesaRouter)

//inicializacao da API
restaurente.listen(4000,()=>{
    console.log('Api rodando');
})