import { usuarios_roles } from "../models/Usuario_roles";

export class usuarioRoleService {
  static getUsuarioRole = async (id) => {
    return await usuarios_roles.find({
      usuario_id: id,
    });
  };

  static getAllUsuariosRoles = async () => {
    return await usuarios_roles.find();
  };

  static createUsuarioRole = async (dto) => {
    let usuarioRole = new usuarios_roles(dto);

    return await usuarioRole.save();
  };
}
