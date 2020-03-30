console.log("JavaScript, Loaded!!");
var tv=document.querySelector(".tvimgs")
var list=
["url('images/1.jpg')",
"url('images/2.jpg')",
"url('images/3.jpg')",
"url('images/4.jpg')",
"url('images/5.jpg')",
"url('images/6.jpg')",
"url('images/7.jpg')",
"url('images/8.jpg')",
"url('images/9.jpg')",
"url('images/10.jpg')",
"url('images/11.jpg')",
"url('images/12.jpg')",
"url('images/13.jpg')",
"url('images/14.jpg')",
"url('images/15.jpg')",
"url('images/16.jpg')",
"url('images/17.jpg')",
"url('images/18.jpg')",
"url('images/19.jpg')",
"url('images/20.jpg')"]
tv.style.backgroundImage=list[0]
i=0
var myinterval=setInterval(function()
{
    i++;
    if(i==20)
    {
        i=0;
    }
    tv.style.backgroundImage=list[i];
},1500)
var simg=document.querySelector(".search1 button");
var neww="url('images/tv.png')";
var body=document.querySelector("body");
simg.addEventListener("click",function()
{
    tv.innerHTML="<form method='POST' action='/search'> <div class='form-group'> <input type='text' name='query' class='form-control' placeholder='Search...'> </div> <button type='submit' class='btn btn-primary abc'>Search🔎</button>";
    document.querySelector("form").style.marginTop="40px";
    document.querySelector("form").style.width="450px";
    document.querySelector("form").style.marginLeft="110px";
    document.querySelector(".abc").style.marginLeft="150px";
    tv.style.border="3px solid grey";
    clearInterval(myinterval);
})