import { configuracaoPC } from "../models/index.js";

export class configpcService {
  static getConfigPc = async () => {
    return await configuracaoPC.find();
  };

  static getConfigPcById = async (id) => {
    return await configuracaoPC.findById(id);
  };

  static createConfigPc = async (dto) => {
    let configpc = new configuracaoPC(dto);

    return await configpc.save();
  };

  static updateConfigPc = async (dto, id) => {
    return await configuracaoPC.findByIdAndUpdate(id, {
      $set: dto,
    });
  };

  static deleteConfigPc = async (id) => {
    return await configuracaoPC.findByIdAndDelete(id);
  };

  static getConfigPcPorFiltro = async (busca) => {
    return configuracaoPC.find(busca);
  };

  static getProcessador = async (processador) => {
    return await configuracaoPC.findOne({
      processador: processador,
    });
  };
}
