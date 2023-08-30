import express from "express";
import morgan from "morgan"

const app = express();
const port = 3000;
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.send("<h2>Hello!</h2>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
