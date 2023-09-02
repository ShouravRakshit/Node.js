import express from "express";

const router = express.Router(); 

router.get("/", (req, res) => {
    res.render("index.ejs", {
        content : "Home"
    })
});

router.get("/about", (req, res) =>{
    // res.render("index.ejs", {
    //     content : "About"
    // })
    res.redirect("/users/");
});

export {router};