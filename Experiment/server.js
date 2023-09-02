import express from "express";
import bodyParser from "body-parser";
import {router as userRouter} from "./routes/routes.users.js" ;


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users/", userRouter);

app.post("/submit", (req, res) => {
    res.render("regis.ejs")
});


export {app};