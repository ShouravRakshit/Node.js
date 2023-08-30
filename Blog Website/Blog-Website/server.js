import express from "express";
import bodyParser from "body-parser";


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Created some random variables that I am going to display in the beginning.
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const userInfo = [];
const homePageInfo = [];

// Rendered the home page and sending the my values in the home.ejs file.
app.get("/", async (req, res) => {

  res.render("home.ejs", {
    content : homeStartingContent,
    posts : homePageInfo
  });
});

// Rendered the about page.
app.get("/about", async (req, res) => {
  res.render("about.ejs", {
    content : aboutContent,
  });
});

// Rendered the contact page.
app.get("/contact", async (req, res) => {
  res.render("contact.ejs", {
    content : contactContent,
  });
});

// Rendered the publish page.
app.get("/publish", async (req, res) => {
  res.render("publish-blog.ejs");
});

// Getting the values from the publish page form and storing it in a array in order to use it later.
// Also redirecting the page to home page clicking the publish button.
app.post("/", async (req, res) => {
  
  const post = {
    title : req.body["title"],
    body : req.body["post"]
  } 

  // Sliced the paragraph for the home page.
  // The full paragraph can be read from the indiviual pages.
  let truncatedPost = JSON.parse(JSON.stringify(post)); 
  // Truncate the body if it's longer than 100 characters
  if (truncatedPost.body.length > 100) {
    truncatedPost.body = truncatedPost.body.slice(0, 100) + "...";
  }

  console.log(truncatedPost);
  homePageInfo.push(truncatedPost);
  userInfo.push(post);
  res.redirect("/");
});


app.get("/posts/:postName", function (req, res) { 
    let linkMatch = false;
    const link = req.params.postName;
    const modifiedLink = link.replace(/-/g, ' ').toLowerCase();
    console.log(modifiedLink);

    for (let i = 0; i < userInfo.length; i++) { 
        if (userInfo[i].title.replace(/-/g, ' ').toLowerCase() === modifiedLink) {
          console.log("Found it!");
          linkMatch = true;
          res.render('page.ejs', { 
            title: modifiedLink, 
            body : userInfo[i]["body"]
          });
        }
      } 
    
    // If there is no matching link it will show 404.ejs page.
    if (!linkMatch){
      res.status(404).render("404");  
    }
    
 });


 export {app};