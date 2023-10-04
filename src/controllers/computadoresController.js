import { NaoEncontrado } from "../errors/NaoEncontrado.js";
import { computadores } from "../models/Computador.js";
import { configuracaoPC } from "../models/ConfiguracaoPC.js";
import { computadoresService } from "../services/computadoresService.js";

export class ComputadorController {
  static listarComputadores = async (req, res, next) => {
    try {
      req.resultado = computadores.find();

      next();
    } catch (error) {
      next(error);
    }
  };

  static listarComputadorPorId = async (req, res, next) => {
    const id = req.params.id;

    try {
      const computador = await computadoresService.getComputadorById(id);

      if (computador !== null) {
        res.status(200).send(computador.toJSON());
      } else {
        next(new NaoEncontrado("Id do Computador não localizado."));
      }
    } catch (error) {
      next(error);
    }
  };

  static cadastrarComputador = async (req, res, next) => {
    try {
      const computadorNovo = await computadoresService.createComputador(
        req.body
      );

      res.status(200).send(computadorNovo.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static atualizarComputador = async (req, res, next) => {
    try {
      const id = req.params.id;

      const computadorResult = await computadoresService.updateComputador(
        req.body,
        id
      );

      if (computadorResult !== null) {
        res
          .status(200)
          .send({ message: `Computador ${id} atualizado com sucesso` });
      } else {
        next(new NaoEncontrado("Id do Computador não localizado."));
      }
    } catch (error) {
      next(error);
    }
  };

  static excluirComputador = async (req, res, next) => {
    try {
      const id = req.params.id;

      const computadorResult = await computadoresService.deleteComputador(id);

      if (computadorResult !== null) {
        res.status(201).send({ message: "Computador excluido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Computador não localizado."));
      }
    } catch (error) {
      next(error);
    }
  };

  static listarComputadorPorFiltro = async (req, res, next) => {
    console.log("opa");
    try {
      const { proprietario, pcProcessador } = req.query;

      let busca = {};

      if (proprietario)
        busca.proprietario = { $regex: proprietario, $options: "i" };

      if (pcProcessador) {
        const processador = await configuracaoPC.findOne({
          processador: pcProcessador,
        });

        if (processador !== null) {
          busca.configuracao = processador._id;
        } else {
          busca = null;
        }

        if (busca !== null) {
          //Aqui esta sendo realizado um filter onde vai procurar ou FILTRAR todos os proprietarios com o mesmo nome de cima na query, e resgata-los!!

          console.log("opa");

          const computadorResultado = computadores
            .find(busca)
            .populate("configuracao");

          req.resultado = computadorResultado;

          next();
        } else {
          res.status(200).send([]);
        }
      }
    } catch (error) {
      next(error);
    }
  };
}
