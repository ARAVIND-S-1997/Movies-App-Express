import express from "express";
const router=express.Router();

export const moviesRouter=router;

import { 
    allMoviesDataFunction, 
    fetchMoviesByIdfunction, 
    sendParticularMovieDataFunction, 
    deleteAllMovieDataFunction, 
    deleteParticularMovieDataFunction, 
    updateParticularMovieDataFunction } from "../functionFile.js";
import { auth } from "./authentication.js";


// Fetch data all movies data from mongoDB

// router.get("/", async (request, response) => {
//     const allMoviesData = await allMoviesDataFunction();
//     response.send(allMoviesData)
//   })
  
  // Fetch particular movie data from mongoDB 
  
//   router.get("/:id", async (request, response) => {
//     const { id } = request.params;
//     console.log(request.params)
//     const data = await fetchMoviesByIdfunction(id);
//     console.log(data)
//     data ? response.send(data) : response.status(404).send("Match not found");
//   });
  
  
  
  // post particular movie data to mongoDB local and atlas
  
//   router.post("/", async (request, response) => {
//     const data = request.body;
//     const sendParticularMovieData = await sendParticularMovieDataFunction(data)
//     response.send(sendParticularMovieData);
//   }
//   );
  
  // fetching language and rating in mongoDB
  
  router.get("/", async (request, response) => {
    const filter = request.query;
    // console.log( filter)
    // console.log(request.query)
    if (filter.rating) {
      filter.rating = parseFloat(filter.rating);
  
      // or Filter.rating=+Filter.rating;
  
    }
    console.log(filter.rating)
    const reqData = await client.db("moviesList").collection("movies").find(filter).toArray();
    response.send(reqData);
    console.log(reqData);
  
  })
  
  // Delete all data in mongodb atlas
  
//   router.delete("/", async (request, response) => {
//     const data = request.query;
//     const deleteAllMovieData = await deleteAllMovieDataFunction();
//     response.send(deleteAllMovieData)
//   });
  
  // delete particular movie from mongodb atlas
  
//   router.delete("/:id", async (request, response) => {
//     const { id } = request.params;
//     const deleteParticularMovieData = await deleteParticularMovieDataFunction(id);
//     deleteParticularMovieData.deletedCount > 0 ? response.send(deleteParticularMovieData) : response.status(404).send("match not found");
//   });
  
  // update particular movie from mongodb atlas
  
//   router.put("/:id", async (request, response) => {
//     const { id } = request.params;
//     const data = request.body;
//     const updatedParticularMovieData = await updateParticularMovieDataFunction(id, data);
//     const fetchMoviesById= await fetchMoviesByIdfunction(id);
//     response.send(fetchMoviesById);
//   });

// combined the commands which has same path

router.route("/").get(auth, async (request, response) => {
  const allMoviesData = await allMoviesDataFunction();
  response.send(allMoviesData)
}).post(async (request, response) => {
  const data = request.body;
  const sendParticularMovieData = await sendParticularMovieDataFunction(data)
  response.send(sendParticularMovieData);
}
).delete(async (request, response) => {
  const data = request.query;
  const deleteAllMovieData = await deleteAllMovieDataFunction();
  response.send(deleteAllMovieData)
});


router.route("/:id").get(async (request, response) => {
  const { id } = request.params;
  console.log(request.params)
  const data = await fetchMoviesByIdfunction(id);
  console.log(data)
  data ? response.send(data) : response.status(404).send("Match not found");
}).delete(async (request, response) => {
  const { id } = request.params;
  const deleteParticularMovieData = await deleteParticularMovieDataFunction(id);
  deleteParticularMovieData.deletedCount > 0 ? response.send(deleteParticularMovieData) : response.status(404).send("match not found");
}).put(async (request, response) => {
  const { id } = request.params;
  const data = request.body;
  const updatedParticularMovieData = await updateParticularMovieDataFunction(id, data);
  const fetchMoviesById = await fetchMoviesByIdfunction(id);
  response.send(fetchMoviesById);
});
