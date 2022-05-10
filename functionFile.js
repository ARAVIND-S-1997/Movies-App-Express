import { client } from "./index.js";

async function updateParticularMovieDataFunction(id, data) {
  return await client.db("moviesList").collection("movies").updateOne({ id: id }, { $set: data });
}
async function deleteParticularMovieDataFunction(id) {
  return await client.db("moviesList").collection("movies").deleteOne({ id: id });
}
async function deleteAllMovieDataFunction() {
  return await client.db("moviesList").collection("movies").deleteMany();
}
async function sendParticularMovieDataFunction(data) {
  return await client.db("moviesList").collection("movies").insertMany(data);
}
async function allMoviesDataFunction() {
  return await client.db("moviesList").collection("movies").find({}).toArray();
}
async function fetchMoviesByIdfunction(id) {
  return await client.db("moviesList").collection("movies").findOne({ id });
}


async function sendUsersDataFunction(data) {
  return await client.db("moviesList").collection("users").insertOne(data);
}

async function fetchUserFunction(username) {
  return await client.db("moviesList").collection("users").findOne({username:username});
}


export { 
  allMoviesDataFunction, 
  fetchMoviesByIdfunction, 
  sendParticularMovieDataFunction, 
  deleteAllMovieDataFunction, 
  deleteParticularMovieDataFunction, 
  updateParticularMovieDataFunction,
  sendUsersDataFunction,
  fetchUserFunction
}