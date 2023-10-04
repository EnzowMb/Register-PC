import express from "express";
import { UsuarioController } from "../controllers/usuariosController.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.use(auth);

router
  .get("/usuarios", UsuarioController.listarUsuarios)
  .get("/usuarios/:id", UsuarioController.listarUsuarioPorId)
  .post("/usuarios", UsuarioController.cadastrarUsuario)
  .put("/usuarios/:id", UsuarioController.atualizarUsuario)
  .delete("/usuarios/:id", UsuarioController.excluirUsuario);

export default router;
