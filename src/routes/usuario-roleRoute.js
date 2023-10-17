import express from "express";
import { UsuarioRoleController } from "../controllers/usuario-roleController";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.use(auth);

router
  .get("/usuario-role", UsuarioRoleController.listarUsuariosRole)
  .get("/usuario-role/:id", UsuarioRoleController.listarUsuarioRole)
  .post("/usuario-role", UsuarioRoleController.cadastrarUsuarioRole);

export default router;
