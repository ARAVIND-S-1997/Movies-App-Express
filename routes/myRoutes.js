import express from "express";
import { getallmovies } from "../modules/getallmoviesModule.js";


const router = express.Router();
export const myroutes = router;

router.get("/allmovies", getallmovies);