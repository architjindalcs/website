const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
const path=require("path");
const publicPath=path.join(__dirname,"public");
app.use(express.static(publicPath));
app.set("view engine","ejs");
app.get("/",function(req,res)
{
    res.render("homepage");
})
app.post("/search",function(req,res)
{
    console.log(req.body)
})

app.listen(3000,function()
{
    console.log("Server has started!!")
})