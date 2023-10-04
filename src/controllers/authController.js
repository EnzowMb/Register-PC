import { RequisicaoIncorreta } from "../errors/RequisicaoIncorreta.js";
import { authService } from "../services/authService.js";

export class AuthController {
  static login = async (req, res, next) => {
    try {
      const { email, senha } = req.body;

      const login = await authService.login({ email, senha });

      if (login) {
        res.status(200).send(login);
      } else {
        next(new RequisicaoIncorreta("Usuario não cadastrado!"));
      }
    } catch (error) {
      next(error);
    }
  };
}
