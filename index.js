//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
const app = express();
const port= 3000;

app.listen(port, ()=> {
    console.log(`Server started at ${port}`);
});