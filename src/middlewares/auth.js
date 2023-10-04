import pkg from "jsonwebtoken";
const { verify, decode } = pkg;
import { jsonSecret } from "../config/jsonSecret.js";

export const auth = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (authToken) {
    const [, token] = authToken.split(" ");

    try {
      verify(token, jsonSecret.secret);

      const { id, email } = await decode(token);

      req.usuarioId = id;
      req.usuarioEmail = email;

      return next();
    } catch (error) {
      return res.status(401).json({ message: "Usuario não autorizado" });
    }
  }

  return res.status(401).json({ message: "Acess Token não informado" });
};
