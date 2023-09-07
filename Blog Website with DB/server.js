import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/users.routes.js";


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');



export {app};