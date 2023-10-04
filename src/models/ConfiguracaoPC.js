import mongoose from "mongoose";

const configPC = new mongoose.Schema({
  id: { type: String },
  processador: {
    type: String,
    required: [true, "O processador é obrigatorio"],
  },
  placaMae: { type: String, required: [true, "A placa mãe é obrigatoria"] },
  memoriaRAM: { type: String, required: [true, "A memoria ram é obrigatoria"] },
  fonte: { type: String, required: [true, "A fonte é obrigatoria"] },
  armazenamento: {
    type: String,
    required: [true, "O armazenamento é obrigatorio"],
    enum: {
      values: ["SSD", "HDD"],
      message: "O armazenamento deve ser HDD ou SSD. Valor inserido: {VALUE};",
    },
  },
  placaVideo: { type: String },
});

export const configuracaoPC = mongoose.model("configPC", configPC);
