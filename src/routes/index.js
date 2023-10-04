import express from "express";
import computadores from "./computadoresRoutes.js";
import configs from "./configRoutes.js";
import usuarios from "./usuarioRoutes.js";
import auth from "./authRoute.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Computadores" });
  });

  app.use(express.json(), auth, computadores, configs, usuarios);
};

export default routes;
