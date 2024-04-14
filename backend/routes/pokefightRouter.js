import express from "express";
const pokefightRouter = express.Router();
import {
  getAllPokefights,
  getPokefightById,
  getPokefightInfoById,
} from "../controllers/pokefightController.js";

pokefightRouter.get("/", getAllPokefights);
pokefightRouter.get("/:id", getPokefightById);
pokefightRouter.get("/:id/:info", getPokefightInfoById);

export default pokefightRouter;