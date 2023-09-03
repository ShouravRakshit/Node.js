import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/circle.html", (req, res) => {
    res.sendFile(__dirname + "/views/circle.html");
});

app.get("/triangle.html", (req, res) => {
    res.sendFile(__dirname + "/views/triangle.html");
});

app.post("/circle.html", (req, res) => {
    const area = req.body.radius ** 2;
    res.send(`<h1>The area of circle is : ${area}</h1>`);
});


app.post("/triangle.html", (req, res) => {
    const area = req.body.base * req.body.height *.5;

    res.send(`<h1>The area of triangle is : ${area}</h1>`);
});



export {app};