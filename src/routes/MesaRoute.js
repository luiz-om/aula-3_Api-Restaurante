const express = require('express');
const router = express.Router();
const DB_MESAS = require('./../db/MesaDB')


router.get('/mesa', (req,res)=>{

        return res.status(200).send(DB_MESAS)
    })

router.post('/mesa', (req,res)=>{
    DB_MESAS.push(req.body)
    
        return res.status(200).send(DB_MESAS)
    })
router.delete('/mesa/:numero',(req,res)=>{
    const numero = req.params.numero
    const index = DB_MESAS.findIndex(mesa =>mesa.numero ==numero)
    if (index != -1) {
        DB_MESAS.splice(index,1)
        return res.status(200).send('Mesa Deletada com sucesso')
    }
return res.status(404).send('Mesa nao encontrada')

})


module.exports=router;x