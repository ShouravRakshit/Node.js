// To see how the final website should work, run "node solution.js".
// Make sure you have installed all the dependencies with "npm i".
// The password is ILoveProgramming


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const correctPassword = "ILoveProgramming";

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) =>{
  const requestData = req.body;
  if (requestData["password"] == correctPassword) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
  
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
