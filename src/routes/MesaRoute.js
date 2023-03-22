const express = require('express');
const router = express.Router();
const MesaModel = require('../../models/MesaModel')


router.get('/mesa', async (req,res)=>{
const mesas =  await MesaModel.find()
        return res.status(200).send(mesas)
    })

router.post('/mesa', async (req,res)=>{
   
try {
    const mesaCriada = await MesaModel.create({
        numero:req.body.numero
    })
    return res.status(200).send(mesaCriada)
} catch (error) {
    if (error.code ==11000) {
        return res.status(400).send('Mesa já cadastrada!')
    }
    return res.status(500).send(error)
}
  
    
     
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


module.exports=router;