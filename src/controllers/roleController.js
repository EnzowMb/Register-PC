import { NaoEncontrado } from "../errors/NaoEncontrado.js";
import { RequisicaoIncorreta } from "../errors/RequisicaoIncorreta.js";
import { roleService } from "../services/roleService.js";

export class RoleController {
  static listarRoutes = async (req, res, next) => {
    try {
      const listaRoutes = await roleService.getRole();

      res.status(200).json(listaRoutes);
    } catch (error) {
      next(error);
    }
  };

  static getRolePorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const role = await roleService.getRoleById(id);

      if (role !== null) {
        res.status(200).send(role.toJSON());
      } else {
        next(new NaoEncontrado("Id da role não localizada."));
      }
    } catch (error) {
      next(error);
    }
  };

  static cadastrarRole = async (req, res, next) => {
    try {
      const { nome, descricao } = req.body;

      const roleNova = await roleService.createRole({ nome, descricao });

      if (roleNova !== null) {
        res.status(200).send(roleNova.toJSON());
      } else {
        next(new RequisicaoIncorreta("Role ja Cadastrada"));
      }
    } catch (error) {
      next(error);
    }
  };

  static atualizarRole = async (req, res, next) => {
    try {
      const id = req.params.id;

      const { nome, descricao } = req.body;

      const roleResult = await roleService.updateRole({ nome, descricao }, id);

      if (roleResult !== null) {
        res
          .status(200)
          .send({ message: `Role ${nome} atualizada com sucesso` });
      } else {
        next(new NaoEncontrado("Id da Role não localizada"));
      }
    } catch (error) {
      next(error);
    }
  };

  static excluirRole = async (req, res, next) => {
    try {
      const id = req.params.id;

      const roleResult = await roleService.deleteRole(id);

      if (roleResult !== null) {
        res.status(201).send({ message: "Role excluida com sucesso" });
      } else {
        next(new NaoEncontrado("Id da Role não localizada."));
      }
    } catch (error) {
      next(error);
    }
  };
}
