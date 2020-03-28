const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
const path=require("path");
const publicPath=path.join(__dirname,"public");
app.use(express.static(publicPath));
app.set("view engine","ejs");
const request=require("request");
app.get("/",function(req,res)
{
    res.render("homepage");
})
app.post("/search",function(req,res)
{
    const name=encodeURIComponent(req.body.query);
    const url="https://superheroapi.com/api/2404450309797255/search/"+name;
    console.log(url);
    request(url,function(error,response,body)
    {
        res.render("results.ejs",body.results);
    })
})

app.listen(3000,function()
{
    console.log("Server has started!!")
})