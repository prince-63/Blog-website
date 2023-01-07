const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));
app.set("view engine", "ejs");

const main = "this is a main page!";
const about = "this is a about page!";
const contact = "this is a contact page!";

const arr = [];

app.post("/", function (req, res) {
  const title = req.body.title;
  const data = req.body.data;
  const obj = { title: title, data: data };
  arr.push(obj);
  res.redirect("/");
});

// main page
app.get("/", function (req, res) {
  res.render("main", {arrStore: arr});
});

// contact page
app.get("/contact", function (req, res) {
  res.render("contact", { contactPage: contact });
});

// about page
app.get("/about", function (req, res) {
  res.render("about", { aboutPage: about });
});

// post page
app.get("/post", function (req, res) {
  res.render("post");
});


// app.get("/post/:pageName", function(req, res) {
//     res.render("page");
// });

app.get("/post/:page", function(req, res) {
  const url = _.lowerCase(req.params.page);
  arr.forEach((items) => {
    const storeTitle = items.title;
    if(url === storeTitle) {
      res.render("page", {title : items.title, content : items.data});
    }
  })
})
app.listen(3000, () => {
  console.log("website run port 3000!");
});
