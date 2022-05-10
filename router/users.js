import express from "express";
const router = express.Router();
export const usersRouter = router;
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { genPassword } from "../genPassword.js"
import{ sendUsersDataFunction,fetchUserFunction } from "../functionFile.js"


router.route("/signup").post(async (request, response) => {
    const { username, password } = request.body;
    const userResult = await fetchUserFunction(username);
    console.log(userResult)
    if (userResult) {
        response.send({ message: "username already exist" })
        return;
    }
    else {
        console.log("username:", username)
        console.log("password:", password)
        const data = await genPassword(password);
        const result = await sendUsersDataFunction({ username, password: data });
        console.log("final data", data)
        response.send(result);
    }
}); 


router.route("/login").post(async (request, response) => {
    const { username, password } = request.body;
    const userResult = await fetchUserFunction(username);
    console.log("user data",userResult)
    if (!userResult) {
        response.send("invalid credantials");
        return
    }
    const storedPassword = userResult.password;
    const compare = await bcrypt.compare(password, storedPassword)
    console.log(compare)
    if (compare) {
        // const token = jwt.sign({ id: userResult._id}, process.env.secretkey )
        response.send("success")
        // console.log(token)
        return;
    }
    else {
        response.send("invalid credentials")
        return;
    }
}); 