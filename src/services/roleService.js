import { roles } from "../models/index.js";

export class roleService {
  static getRole = async () => {
    return roles.find();
  };

  static getRoleById = async (id) => {
    return roles.findById(id);
  };

  static createRole = async (dto) => {
    let role = new roles(dto);

    return role.save();
  };

  static updateRole = async (dto, id) => {
    return roles.findByIdAndUpdate(id, {
      $set: dto,
    });
  };

  static deleteRole = async (id) => {
    return roles.findByIdAndDelete(id);
  };
}
