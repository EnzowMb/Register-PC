import mongoose from "mongoose";

const usuariosRoles = new mongoose.Schema({
  id: { type: String },
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuarioSchema",
    required: [true, "O id do usuario é obrigatorio"],
  },
  role_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rolesSchema",
    required: [true, "O id da role é obrigatoria"],
  },
});

export const usuarios_roles = mongoose.model("usuarios_roles", usuariosRoles);
