//jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Schema = mongoose.Schema;

const app = express();

const itemSchema = new Schema({
  name: String,
});

const listSchema = {
  name: String,
  items: [itemSchema]
}


const Item = mongoose.model("Item", itemSchema);
const List = mongoose.model("List", listSchema);

const item1 = new Item({
  name: "Welcome to your todolist.",
});

const item2 = new Item({
  name: "Hit the + button to add a new item.",
});

const item3 = new Item({
  name: "<--- Hit this to delete an item.",
});



const defaultItems = [item1, item2, item3];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async function (req, res) {
  try {
    const items = await Item.find();
    if (items.length === 0) {
      try {
        const items = await Item.insertMany(defaultItems);
        console.log("Successful");
      } catch (err) {
        console.error("Error inserting documents:", err);
      }
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: items});
    } 
  } catch (err) {
    console.log(err);
  }
});

app.get("/:customListName", async function (req, res) {
  const customListNames = req.params.customListName.toLowerCase();
  try {
    List.find({ name:  customListNames}).then(docs => {

      if (docs.length === 0) {
        
        const list = new List({
          name: customListNames,
          items: defaultItems
        });

        list.save();
        res.redirect("/" + customListNames);
    } else {
      function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    const title = capitalizeFirstLetter(docs[0].name);
    
    res.render("list", {listTitle: title, newListItems: docs[0].items});
    }
  }).catch(err => {
      console.log("Error:", err);
  });
    
} catch (err) {
    console.log("Error:", err);
}
  
})


app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const item = new Item({
    name : itemName
  })

  item.save();
  res.redirect("/");
});

app.post("/delete", async function(req, res) {
    const removeItemByItem = req.body.removeitem;
    console.log(removeItemByItem);
  try {
      await Item.findByIdAndDelete(removeItemByItem);
      console.log("Item successfully deleted!");
      res.redirect("/");
  } catch (err) {
      console.log("Error deleting item:", err);
  }
});


app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
