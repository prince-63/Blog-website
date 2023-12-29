import express from "express";
import dotenv from "dotenv";
import _ from "lodash";
import bodyParser from "body-parser";
// import './databases/databases.js';
import router from "./routes/blog.route.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

//configuration
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));
app.set("view engine", "ejs");
app.use(router);

// app.post("/", function (req, res) {
//   const title = req.body.title;
//   const data = req.body.data;
//   const obj = { title: title, data: data };
//   arr.push(obj);
//   res.redirect("/");
// });

// app.get("/post/:page", function(req, res) {
//   const url = _.lowerCase(req.params.page);
//   arr.forEach((items) => {
//     const storeTitle = items.title;
//     if(url === storeTitle) {
//       res.render("page", {title : items.title, content : items.data});
//     }
//   })
// })

app.listen(PORT, () => {
  console.log(`SERVER LISTEN ON PORT ${PORT}`);
});
