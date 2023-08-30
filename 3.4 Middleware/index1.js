import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) =>{
  const requestData = req.body;
  console.log('Received data:', requestData);
  res.send('ok now I understand!');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
