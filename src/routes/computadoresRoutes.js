import express from "express";
import { ComputadorController } from "../controllers/computadoresController.js";
import { paginar } from "../middlewares/paginar.js";

const router = express.Router();

router
  .get("/computadores", ComputadorController.listarComputadores, paginar)
  .get(
    "/computadores/busca",
    ComputadorController.listarComputadorPorFiltro,
    paginar
  ) //ESTA ROTA DEVE SER PRIMEIRO ANTES DO ID PORQUE VAI IMPORTAR NA HORA DE COLOCAR NA URL, da mais especifica, pra menos especifica
  .get("/computadores/:id", ComputadorController.listarComputadorPorId)
  .post("/computadores", ComputadorController.cadastrarComputador)
  .put("/computadores/:id", ComputadorController.atualizarComputador)
  .delete("/computadores/:id", ComputadorController.excluirComputador);

//Lembrar sempre:
//Da rota mais especifica, como por exemplo busca de uma query
//Para uma menos especifica, como por exemplo recuperar por id

export default router;
