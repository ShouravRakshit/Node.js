import express from "express";

const router = express.Router(); 

router.get("/", (req, res) => {
    // You have to write url + ? + id = something and name = something ...
    // const queryValue = req.query;
    // console.log(queryValue);
    res.render("index.ejs", {
        content : "Home"
    })
});

// router.get("/about", (req, res) =>{
//     res.render("index.ejs", {
//         content : "About"
//     })
//     // res.redirect("/users/");
// });

// router.post("/submit", (req, res) => {
//     // Handle POST request logic here
//     console.log(req.body);
//   });


export {router};