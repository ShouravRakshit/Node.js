import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/users.route.js";
import cors from 'cors';

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter)
app.use(cors());

app.use((req, res, next) =>{
    res.status(404).json({
        message : "resource not found by the server!"
    })
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

