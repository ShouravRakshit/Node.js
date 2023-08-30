import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const name = "Ivan"
  res.render("index.ejs");
});

app.post("/", (req, res) => {

  const requestData = req.body;
  const length = requestData["fName"].length + requestData["lName"].length;

  res.render("index.ejs", {
    nameLength : length
  });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



