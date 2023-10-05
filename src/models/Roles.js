import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String },
  descricao: { type: String },
});

export const roles = mongoose.model("roles", rolesSchema);
