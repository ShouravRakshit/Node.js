import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const d = new Date();
let day = d.getDay();

app.get("/", (req, res) => {
  
  res.render("index.ejs", 
  {weekday: day}
  );
  
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


