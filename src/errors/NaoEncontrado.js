import { ErroBase } from "./ErroBase.js";

export class NaoEncontrado extends ErroBase {
  constructor(mensagem = "Pagina não encontrada") {
    super(mensagem, 404);
  }
}
