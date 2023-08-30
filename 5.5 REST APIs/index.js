import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


const yourBearerToken = "a81e1cba-5345-4533-b51b-4743f63accaf";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
