var spin=document.querySelectorAll(".spin");
var spst=document.querySelectorAll(".spst");
var spsp=document.querySelectorAll(".spsp");
var sppo=document.querySelectorAll(".sppo");
var spin1=document.querySelectorAll(".spin1");
var spst1=document.querySelectorAll(".spst1");
var spsp1=document.querySelectorAll(".spsp1");
var sppo1=document.querySelectorAll(".sppo1");
var k1=Math.floor(Math.random()*21);
// k1="/images/"+k1+".jpg";
// k1="url("+"'k1'"+")";
lis=["url('/images/1.jpg')",
"url('/images/2.jpg')",
"url('/images/3.jpg')",
"url('/images/4.jpg')",
"url('/images/5.jpg')",
"url('/images/6.jpg')",
"url('/images/7.jpg')",
"url('/images/8.jpg')",
"url('/images/9.jpg')",
"url('/images/10.jpg')",
"url('/images/11.jpg')",
"url('/images/12.jpg')",
"url('/images/13.jpg')",
"url('/images/14.jpg')",
"url('/images/15.jpg')",
"url('/images/16.jpg')",
"url('/images/17.jpg')",
"url('/images/18.jpg')",
"url('/images/19.jpg')",
"url('/images/20.jpg')",
"url('/images/21.jpg')",
"url('/images/1.jpg')",
"url('/images/1.jpg')",
]
var body=document.querySelector("body");
body.style.backgroundImage=lis[20];
for(var i=0;i!=spin.length;i++)
{
    var t1=spin[i].textContent;
    var t2=spst[i].textContent;
    var t3=spsp[i].textContent;
    // var t4=sppo[i].textContent;

    spin1[i].style.minWidth=t1+"%";
    spst1[i].style.minWidth=t2+"%";
    spsp1[i].style.minWidth=t3+"%";
    // sppo1[i].style.minWidth=t4+"%";
}


