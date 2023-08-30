import express from "express";
const app = express();
const port = 3000;


const number = 10;


app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1> <h2>Heloo</h2> ${number}`);
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
