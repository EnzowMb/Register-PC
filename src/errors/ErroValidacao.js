import { RequisicaoIncorreta } from "./RequisicaoIncorreta.js";

export class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const erroValidacao = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join(";");

    super(`Os seguintes erros foram encontrados: ${erroValidacao}`);
  }
}
