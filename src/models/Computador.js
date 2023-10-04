import mongoose from "mongoose";

const PcSchema = new mongoose.Schema({
  id: { type: String },
  proprietario: {
    type: String,
    validate: {
      validator: (valor) => {
        return valor.length > 2;
      },
      message:
        "O nome deve ter o tamanho minimo de 2 caracteres. Valor fornecido: {VALUE};",
    },
    required: [true, "O nome do proprietario é obrigatorio"],
  },
  configuracao: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "configPC",
    required: [true, "O id da configuração é obrigatorio"],
  },
});

export const computadores = mongoose.model("computadores", PcSchema);
