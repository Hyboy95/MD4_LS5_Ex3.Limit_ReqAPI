import express from "express";
import { PokemonController } from "../controllers/pokemon.controller";
import { apiLimiter } from "../middlewares/apiLimiter";
export const router = express.Router();
router.use(apiLimiter);

router.get('/', PokemonController.getAllPokemon);

