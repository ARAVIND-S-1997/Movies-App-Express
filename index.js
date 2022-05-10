// connecting express

// const express=require("express");
dotenv.config(); 
import express from "express"
import cors from"cors"
import dotenv from "dotenv";
import { MongoClient } from "mongodb";


const server = express();
const PORT = process.env.PORT;
server.listen(PORT, () => { console.log("started in", PORT) });

// connecting mongodb


// const {MongoClient}=require("mongodb");
// const mongo_url="mongodb://localhost"


const mongo_url = process.env.mongo_url;
async function createconnection() {
  const client = new MongoClient(mongo_url);
  await client.connect();
  console.log("Mongodb connected");
  return client;
}
// createconnection();
export const client = await createconnection();


server.use(express.json());
server.use(cors());

// import { 
//   allMoviesDataFunction, 
//   fetchMoviesByIdfunction, 
//   sendParticularMovieDataFunction, 
//   deleteAllMovieDataFunction, 
//   deleteParticularMovieDataFunction, 
//   updateParticularMovieDataFunction } from "./functionFile.js";
import { moviesRouter } from "./router/movies.js";
import { usersRouter } from "./router/users.js";

  


server.get("/", (request, response) => {
  response.send("Hai there aravind.How are you")
});

server.use("/movies",moviesRouter)
server.use("/users",usersRouter)



