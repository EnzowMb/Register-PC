import { roles } from "../models/index.js";

export class roleService {
  static getRole = async () => {
    return await roles.find();
  };

  static getRoleById = async (id) => {
    return await roles.findById(id);
  };

  static createRole = async (dto) => {
    const roleExist = await roles.findOne({
      nome: dto.nome,
    });

    console.log(roleExist);

    if (roleExist) {
      return null;
    }

    let role = await new roles(dto);

    return role.save();
  };

  static updateRole = async (dto, id) => {
    return await roles.findByIdAndUpdate(id, {
      $set: dto,
    });
  };

  static deleteRole = async (id) => {
    return await roles.findByIdAndDelete(id);
  };
}
