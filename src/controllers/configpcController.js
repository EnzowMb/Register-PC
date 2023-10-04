import { NaoEncontrado } from "../errors/NaoEncontrado.js";
import { configuracaoPC } from "../models/ConfiguracaoPC.js";
import { configpcService } from "../services/configpcService.js";

export class ConfigPcController {
  static listarConfigs = async (req, res, next) => {
    try {
      const listaConfigs = configuracaoPC.find();

      req.resultado = listaConfigs;

      next();
    } catch (error) {
      next(error);
    }
  };

  static listarConfigPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const config = await configpcService.getConfigPcById(id);

      if (config !== null) {
        res.status(200).send(config.toJSON());
      } else {
        next(new NaoEncontrado("Id da configuracao não localizada."));
      }
    } catch (error) {
      next(error);
    }
  };

  static cadastrarConfig = async (req, res, next) => {
    try {
      const configNova = await configpcService.createConfigPc(req.body);

      res.status(200).send(configNova.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarConfig = async (req, res, next) => {
    try {
      const id = req.params.id;

      const configResult = await configpcService.updateConfigPc(req.body, id);

      if (configResult !== null) {
        res
          .status(200)
          .send({ message: `Configuracao ${id} atualizado com sucesso` });
      } else {
        next(new NaoEncontrado("Id da configuracao não localizada."));
      }
    } catch (error) {
      next(error);
    }
  };

  static excluirConfig = async (req, res, next) => {
    try {
      const id = req.params.id;

      const configResult = await configpcService.deleteConfigPc(id);

      if (configResult !== null) {
        res.status(200).send({ message: "Configuracao removida com sucesso" });
      } else {
        next(new NaoEncontrado("Id da configuracao não localizada."));
      }
    } catch (error) {
      next(error);
    }
  };

  static listarConfigPorFiltro = async (req, res, next) => {
    try {
      const busca = processaBusca(req.query);

      if (busca !== null) {
        const configResultado = configuracaoPC.find(busca);

        req.resultado = configResultado;

        next();
      } else {
        res.status(200).send([]);
      }
    } catch (error) {
      next(error);
    }
  };
}

function processaBusca(params) {
  const {
    processador,
    placaMae,
    memoriaRAM,
    fonte,
    armazenamento,
    placaVideo,
  } = params;

  const busca = {};

  if (processador) busca.processador = { $regex: processador, $options: "i" };
  if (placaMae) busca.placaMae = { $regex: placaMae, $options: "i" };
  if (memoriaRAM) busca.memoriaRAM = { $regex: memoriaRAM, $options: "i" };
  if (fonte) busca.fonte = { $regex: fonte, $options: "i" };
  if (armazenamento)
    busca.armazenamento = { $regex: armazenamento, $options: "i" };
  if (placaVideo) busca.placaVideo = { $regex: placaVideo, $options: "i" };

  return busca;
}
