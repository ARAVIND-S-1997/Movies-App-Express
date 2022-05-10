import { movies } from "../models/moviesModel.js";

export const getallmovies = async (request, response) => {
    try {
        const getMoviesReq = await movies.find();
        response.send(getMoviesReq);
    } catch (error) {
        console.log("Error is (Get all movies):", error);
    }
}