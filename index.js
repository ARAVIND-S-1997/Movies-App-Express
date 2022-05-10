import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import mongoconnection from "./mongooseConnection.js"
import { myroutes } from "./routes/myRoutes.js"


dotenv.config();

await mongoconnection();
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => { console.log("started in", PORT) });


app.use(express.json());
app.use(cors());
app.use("/movies", myroutes);



