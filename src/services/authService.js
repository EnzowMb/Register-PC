import { usuarios } from "../models/Usuario.js";
import { compare } from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;
import { jsonSecret } from "../config/jsonSecret.js";

export class authService {
  static login = async (dto) => {
    const usuario = await usuarios.findOne({
      email: dto.email,
    });

    if (!usuario) {
      return null;
    }

    const senhasIguais = await compare(dto.senha, usuario.senha);

    if (!senhasIguais) {
      throw new Error("Usuario ou senha invalido");
    }

    const acessToken = sign(
      {
        id: usuario.id,
        email: usuario.email,
      },
      jsonSecret.secret,
      {
        expiresIn: 86400,
      }
    );

    return { acessToken };
  };
}
