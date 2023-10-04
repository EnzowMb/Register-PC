import { NaoEncontrado } from "../errors/NaoEncontrado.js";
import { RequisicaoIncorreta } from "../errors/RequisicaoIncorreta.js";
import { userService } from "../services/userService.js";

export class UsuarioController {
  static listarUsuarios = async (req, res, next) => {
    try {
      const listaUsuarios = await userService.getUsers();

      res.status(200).json(listaUsuarios);
    } catch (error) {
      next(error);
    }
  };

  static listarUsuarioPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const usuario = await userService.getUsersById(id);

      if (usuario !== null) {
        res.status(200).send(usuario.toJSON());
      } else {
        next(new NaoEncontrado("Id do usuario não localizado."));
      }
    } catch (error) {
      next(error);
    }
  };

  static cadastrarUsuario = async (req, res, next) => {
    try {
      const { nome, email, senha } = req.body;

      const usuarioNovo = await userService.createUser({ nome, email, senha });

      if (usuarioNovo !== null) {
        res.status(200).send(usuarioNovo.toJSON());
      } else {
        next(new RequisicaoIncorreta("Usuario ja Cadastrado"));
      }
    } catch (error) {
      next(error);
    }
  };

  static atualizarUsuario = async (req, res, next) => {
    try {
      const id = req.params.id;

      const { nome, email } = req.body;

      const usuarioResult = await userService.updateUser({ nome, email }, id);

      if (usuarioResult !== null) {
        res
          .status(200)
          .send({ message: `Usuario ${nome} atualizado com sucesso` });
      } else {
        next(new NaoEncontrado("Id do Usuario não localizado."));
      }
    } catch (error) {
      next(error);
    }
  };

  static excluirUsuario = async (req, res, next) => {
    try {
      const id = req.params.id;

      const usuarioResult = await userService.deleteUser(id);

      if (usuarioResult !== null) {
        res.status(201).send({ message: "Usuario excluido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Usuario não localizado."));
      }
    } catch (error) {
      next(error);
    }
  };
}
