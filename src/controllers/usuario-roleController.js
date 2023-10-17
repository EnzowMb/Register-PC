import { NaoEncontrado } from "../errors/NaoEncontrado";
import { RequisicaoIncorreta } from "../errors/RequisicaoIncorreta";
import { usuarioRoleService } from "../services/usuario-roleService";

export class UsuarioRoleController {
  static listarUsuarioRole = async (req, res, next) => {
    try {
      const id = req.params.id;

      const usuario_roles = await usuarioRoleService.getUsuarioRole(id);

      if (usuario_roles !== null) {
        res.status(200).send(usuario_roles.toJSON());
      } else {
        next(new NaoEncontrado("Id do usuario não localizado."));
      }
    } catch (error) {
      next(error);
    }
  };

  static listarUsuariosRole = async (req, res, next) => {
    try {
      const listarUsuariosRoles =
        await usuarioRoleService.getAllUsuariosRoles();

      res.status(200).json(listarUsuariosRoles);
    } catch (error) {
      next(error);
    }
  };

  static cadastrarUsuarioRole = async (req, res, next) => {
    try {
      const { usuario_id, role_id } = req.body;

      const usuarioRoleNovo = await usuarioRoleService.createUsuarioRole({
        usuario_id,
        role_id,
      });

      if (usuarioRoleNovo !== null) {
        res.status(200).send(usuarioRoleNovo.toJSON());
      } else {
        next(new RequisicaoIncorreta("Usuario com Role ja Cadastrada"));
      }
    } catch (error) {
      next(error);
    }
  };
}
