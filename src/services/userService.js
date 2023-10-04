import { usuarios } from "../models/Usuario.js";
import { hash } from "bcrypt";

export class userService {
  static getUsers = async () => {
    return await usuarios.find();
  };

  static getUsersById = async (id) => {
    return await usuarios.findById(id);
  };

  static createUser = async (dto) => {
    const userExist = await usuarios.findOne({
      email: dto.email,
    });

    if (!userExist) {
      const senhaHash = await hash(dto.senha, 8); //8 -> saltRounds

      let usuario = new usuarios({
        nome: dto.nome,
        email: dto.email,
        senha: senhaHash,
      });
      return await usuario.save();
    } else {
      return null;
    }
  };

  static updateUser = async (dto, id) => {
    return await usuarios.findByIdAndUpdate(id, {
      nome: dto.nome,
      email: dto.email,
    });
  };

  static deleteUser = async (id) => {
    return await usuarios.findByIdAndDelete(id);
  };
}
