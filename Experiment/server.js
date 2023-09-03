import express from "express";
import bodyParser from "body-parser";
import {router as userRouter} from "./routes/routes.users.js" ;


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users/", userRouter);

const middleware = (req, res, next) =>{
    req.ywach = {
        name : "ichigo",
        age : 20
    };
    console.log("I am MiddleWare Function!");
    next();
}

app.post("/submit", middleware, (req, res) => {
    console.log(req.ywach);
    res.render("regis.ejs", {
        content : req.ywach
    })
});


export {app};