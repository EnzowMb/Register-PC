import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: [true, "O nome é obrigatorio!"] },
  email: { type: String, required: [true, "Email é obrigatorio!"] },
  senha: { type: String, required: [true, "Senha é obrigatorio!"] },
});

export const usuarios = mongoose.model("usuario", usuarioSchema);
