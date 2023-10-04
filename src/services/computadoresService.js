import { computadores } from "../models/index.js";

export class computadoresService {
  static getComputadores = async () => {
    return await computadores.find();
  };

  static getComputadorById = async (id) => {
    return await computadores.findById(id).populate("configuracao", "placaMae"); //popular(mostrar) a configuração mostrando apenas o dado da placaMae(tem como colocar o que vc quiser para aparecer!)
  };

  static createComputador = async (dto) => {
    let computador = new computadores(dto);

    return await computador.save();
  };

  static updateComputador = async (dto, id) => {
    return await computadores.findByIdAndUpdate(id, {
      $set: dto,
    });
  };

  static deleteComputador = async (id) => {
    return await computadores.findByIdAndDelete(id);
  };

  static getComputadorPorFiltro = async (busca) => {
    return await computadores.find(busca).populate("configuracao");
  };
}
