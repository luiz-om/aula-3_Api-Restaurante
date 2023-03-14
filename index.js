const express = require('express');

const app = express()

app.use(express.json())














//inicializacao da API
app.listen(4000,()=>{
    console.log('Api rodando');
})