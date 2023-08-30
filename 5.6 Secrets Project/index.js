
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// const result = await axios.get(API_URL);
// console.log(result.data.secret);

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        console.log(JSON.stringify(result.data.secret));
        res.render("index.ejs", { 
            secret: JSON.stringify(result.data.secret), 
            username: JSON.stringify(result.data.username),
        });
      } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
      }
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
