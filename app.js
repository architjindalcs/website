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
    // console.log(url);
    request(url,function(error,response,body)
    {
        body=JSON.parse(body);
        if(body.response!="success")
        {
            res.send("<h1>Not FOUND 404!!! <h1> ")
        }
        else
       res.render("results",{
           results: body.results
       });
    })
})
app.get("/play",function(req,res)
{
    res.render("quizgame");
})
app.get("/:id",function(req,res)
{
    const url="https://superheroapi.com/api/2404450309797255/"+req.params.id;
     console.log(url);
    request(url,function(error,response,body)
    {
        body=JSON.parse(body);
        res.render("details",{
            results: body
        });
    })
})

app.listen(process.env.PORT || 3000,function()
{
    console.log("Server has started!!")
})