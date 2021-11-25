const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

const items=["Read Newspaper","Yoga","Shower","Breakfast"];
const worksItem=[];


app.get("/", function(req, res) {

 let today=date.getDay();

  res.render("list", {TitleList: today,newItem:items});
});

app.post("/",function(req,res){
  let item=req.body.item_add;

if(req.body.list==="work List"){

  worksItem.push(item);
  res.redirect("/work");
}
else

{
  items.push(item);
 res.redirect("/");

}

})

app.get("/work",function(req,res){
  res.render("list",{TitleList:"work List",newItem:worksItem})
})

app.post("/work",function(req,res){
  let item=req.body.item_add;
  worksItem.push(item);
  res.redirect("/work");
})


app.listen(3000, function() {
  console.log("started server running at 3000 port");
});
