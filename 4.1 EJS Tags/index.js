import express from "express";
const app = express();
const port = 3000;

const data = {
  title: "EJS Tags",
  seconds: new Date().getSeconds(),
  items: ["apple", "banana", "cherry"],
  htmlContent: "<strong>This is some strong text</strong>",
};

app.get("/", (req, res) => {
 
  res.render("index.ejs", {new_data: data});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
