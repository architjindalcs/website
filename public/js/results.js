var spin=document.querySelectorAll(".spin");
var spst=document.querySelectorAll(".spst");
var spsp=document.querySelectorAll(".spsp");
var spin1=document.querySelectorAll(".spin1");
var spst1=document.querySelectorAll(".spst1");
var spsp1=document.querySelectorAll(".spsp1");
for(var i=0;i!=spin.length;i++)
{
    var t1=spin[i].textContent;
    var t2=spst[i].textContent;
    var t3=spsp[i].textContent;
    console.log(t1);
    console.log(t2);
    console.log(t3);
    spin1[i].style.minWidth=Number(t1)+250+"px";
    spst1[i].style.minWidth=Number(t2)+250+"px";
    spsp1[i].style.minWidth=Number(t3)+250+"px";
}


