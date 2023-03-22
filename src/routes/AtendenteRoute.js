const express = require("express");
const DB_ATENDENTE = require("../db/AtendenteDB");
const router = express.Router();

router.get("/atendente", (req, res) => {
  return res.status(200).send(DB_ATENDENTE);
});

router.post("/atendente", (req, res) => {
  DB_ATENDENTE.push(req.body);
  return res.status(200).send(DB_ATENDENTE);
});
router.get("/atendente/:id", (req, res) => {
  const resultado = req.params.id;
  const id = DB_ATENDENTE.find((c) => c.id == resultado);
  return res.status(200).send(id);
});

router.put("/atendente/:id", (req, res) => {
  const id = req.params.id;
  const idx = DB_ATENDENTE.findIndex((atendente) => atendente.id == id);
  console.log(idx);
  if (idx != -1) {
    DB_ATENDENTE[idx] = {
      id: req.params.id,
      nome: req.body.nome,
      telefone: req.body.telefone,
    };
    return res.status(200).send("Atentende atualizado com sucesso!!");
  }

  return res.status(404).json("Atendente não encontrado!!");
});

router.delete("/atendente/:id", (req, res) => {
  const id = req.params.id;
  const index = DB_ATENDENTE.findIndex((atendente) => atendente.id == id);
  if (index != -1) {
    DB_ATENDENTE.splice(index, 1);
    return res.status(200).send("Atendente Deletado com sucesso");
  }
  return res.status(404).send("Atendente nao encontrado");
});

module.exports = router;
