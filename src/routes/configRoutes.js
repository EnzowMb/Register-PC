import express from "express";
import { ConfigPcController } from "../controllers/configpcController.js";
import { paginar } from "../middlewares/paginar.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.use(auth);

router
  .get("/configs", ConfigPcController.listarConfigs, paginar)
  .get("/configs/busca", ConfigPcController.listarConfigPorFiltro, paginar)
  .get("/configs/:id", ConfigPcController.listarConfigPorId)
  .post("/configs", ConfigPcController.cadastrarConfig)
  .put("/configs/:id", ConfigPcController.atualizarConfig)
  .delete("/configs/:id", ConfigPcController.excluirConfig);

export default router;
