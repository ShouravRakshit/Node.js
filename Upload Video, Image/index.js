import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import mongoose from "mongoose";


const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to DB
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/usersTestDB")
        console.log("Db is connected")
    } catch (error) {
        console.log("Not connected");
        
    }
}

// file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
        cb(null, "images/");
     },
     filename: function (req, file, cb) { 
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
      }
});

const upload = multer({
    storage: storage
})

app.get("/test", (req, res) =>{
    res.status(200).json({
        message : "testing"
    })
});

app.get("/register", (req, res) =>{
    res.render("index.ejs");
});

app.post("/register", upload.single("image"), (req, res) =>{
    res.status(200).json("The file has been uploaded");
});

// Route not found
app.use((req, res, next) =>{
    res.status(404).json({
        message : "route not found!"
    })
});

// Server problem
app.use((err, req, res, next) => {
    res.status(500).json({
        message : "server problem!"
    })
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
