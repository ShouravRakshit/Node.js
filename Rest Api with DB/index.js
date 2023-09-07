import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/user.route.js";
import cors from 'cors';
import config from "./config/config.js";

const port = config.index.port;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/users", userRouter);
app.use(cors());

app.get("/", (req, res) =>{
    res.render("index.ejs");
});


// Route not found
app.use((req, res, next) =>{
    res.status(404).json({
        message : "route not found!"
    })
});

// Server problem
app.use((err, req, res, next) => {
    res.status(500).json({
        message : "server problem!"
    })
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
