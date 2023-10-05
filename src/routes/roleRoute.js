import express from "express";
import { auth } from "../middlewares/auth.js";
import { RoleController } from "../controllers/roleController.js";

const router = express.Router();

router.use(auth);

router
  .get("/roles", RoleController.listarRoutes)
  .get("/roles/:id", RoleController.listarRolePorId)
  .post("/roles", RoleController.cadastrarRole)
  .put("/roles/:id", RoleController.atualizarRole)
  .delete("/roles/:id", RoleController.excluirRole);

export default router;
