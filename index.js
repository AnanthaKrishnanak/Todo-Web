const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dateModule = require(__dirname+"/date.js")


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

let todo = ["brus", "read", "study"];
let workList = []
let day = dateModule();

app.get("/", (req, res) => {
  res.render("list", { todolist: todo, n: todo.length, date: day });
});

app.get("/work", (req, res) => {
    res.render("list", { todolist: workList, n: workList.length, date: "Work List" });
  });
  

app.post("/", (req, res) => {
  let newItem = req.body.newItem;

  if(req.body.listType=="Work"){
    workList.push(newItem);
    res.redirect("/work");
  }else{
    todo.push(newItem);
    res.redirect("/");
  }
});


app.listen(5500, () => console.log("server started"));
