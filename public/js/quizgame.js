var questions=[{
    "ques":"Which planet is Superman from?",
    "options": ["A: Crypt","B: Khan","C: Krypton","D: Pluto"],
    "ans": 2
},
{
    "ques":"Batman protects which city?",
    "options": ["A: Gotham","B: New York","C: Jump City","D: California"],
    "ans": 0
},{
    "ques":"What job has Peter Parker, Spider-Man's secret alter ego, traditionally held?",
    "options": ["A: Painter","B: Photographer","C: Model","D: Judge"],
    "ans": 1
},
{
    "ques":"Which titan don't possess any superpower?",
    "options": ["A: Robin","B: Beast-Boy","C: Starfire","D: Cyborg"],
    "ans": 0
},
{
    "ques":"Who told Peter Parker 'with great power comes great responsibility?'",
    "options": ["A: Aunt May","B: Uncle Ben","C: Tony Stark","D: Superman"],
    "ans": 1
},
{
    "ques":"There is one well-known substance that can hurt Superman. What is Superman vulnerable to?",
    "options": ["A: Samsonite","B: Kryptonite","C: Nitric Oxide","D: Cosmonite"],
    "ans": 1
},
{
    "ques":"What is Captain America's real name?",
    "options": ["A: Clark Kent","B: Bruce Wayne","C: Garfield Logan","D: Steve Rogers"],
    "ans": 3
},
{
    "ques":"Which superhero does Bruce Banner turn into when he's angry?",
    "options": ["A: Black Panther","B: Spider Man","C: Iron-Man","D: Hulk"],
    "ans": 3
},
{
    "ques":"Which DC superhero's real name is Arthur Curry?",
    "options": ["A: Plastic Man","B: The Flash","C: Shazam","D: Aquaman"],
    "ans": 3
},
{
    "ques":"Which superhero uses a magic lasso?",
    "options": ["A: Stinky Pete","B: Raven","C: Wonder Woman","D: Sheriff Woody"],
    "ans": 2
},
{
    "ques":"What are Wolverine's claws made of?",
    "options": ["A: Iron","B: Adamantium","C: Copper","D: Plasma-Miache"],
    "ans": 1
}]
var emptyarea=document.querySelector(".blank");
var levels=document.querySelectorAll(".com");
console.log(levels);
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
var question=document.querySelector(".ques h2");
var op1=document.querySelector(".op1 h1");
var op2=document.querySelector(".op2 h1");
var op3=document.querySelector(".op3 h1");
var op4=document.querySelector(".op4 h1");
var prices=[1000,2000,5000,10000,25000,50000,100000,250000,500000,750000,1000000];
var optionSelected;
var currQuesIndex=0;
question.textContent=questions[currQuesIndex]["ques"];
op1.textContent=questions[currQuesIndex]["options"][0];
op2.textContent=questions[currQuesIndex]["options"][1];
op3.textContent=questions[currQuesIndex]["options"][2];
op4.textContent=questions[currQuesIndex]["options"][3];
var amt=0;
var h33=document.querySelector(".qside h3");
var all=document.querySelectorAll(".all");
function endgame()
{
    setTimeout(function()
    {
        for(var i=0;i<all.length;i++)
        {
            all[i].style.visibility="hidden";
        }
    },2000)
    emptyarea.classList.add("extra");
    h33.textContent=amt;
}
op1.addEventListener("click",function()
{
    optionSelected=0;
    op1.style.backgroundColor="brown";
    var audi1=new Audio("/images/kbclock.mp3");
    audi1.play();
    setTimeout(function(){
        if(optionSelected==questions[currQuesIndex]["ans"])
        {
            op1.style.backgroundColor="green";
            var audio1=new Audio("/images/clap1.mp3");
            audio1.play();
            levels[10-currQuesIndex].style.backgroundColor="green";
            console.log(currQuesIndex);
            amt=prices[currQuesIndex];
            currQuesIndex++;
            if(currQuesIndex==11)
            {
                endgame();
            }
           
            setTimeout(function(){
                var audio=new Audio("/images/kbcques.mp3");
                audio.play();
                op1.style.backgroundColor="black";
                question.textContent=questions[currQuesIndex]["ques"];
                op1.textContent=questions[currQuesIndex]["options"][0];
                op2.textContent=questions[currQuesIndex]["options"][1];
                op3.textContent=questions[currQuesIndex]["options"][2];
                op4.textContent=questions[currQuesIndex]["options"][3];
            },7000)

        }
        else
        {
            op1.style.backgroundColor="red";
            if(questions[currQuesIndex]["ans"]==1)
            {
                op2.style.backgroundColor="green";
            }
            else if(questions[currQuesIndex]["ans"]==2)
            {
                op3.style.backgroundColor="green";
            }
            else if(questions[currQuesIndex]["ans"]==3)
            {
                op4.style.backgroundColor="green";
            }
            //Play some sound.....
            console.log("Amount: ",amt);
            endgame();
        }
    },3000);

    
})


op2.addEventListener("click",function()
{
    optionSelected=1;
    op2.style.backgroundColor="brown";
    var audi1=new Audio("/images/kbclock.mp3");
    audi1.play();
    setTimeout(function(){
        if(optionSelected==questions[currQuesIndex]["ans"])
        {
            op2.style.backgroundColor="green";
            var audio1=new Audio("/images/clap1.mp3");
            audio1.play();
            levels[10-currQuesIndex].style.backgroundColor="green";
            console.log(currQuesIndex);
            amt=prices[currQuesIndex];
            currQuesIndex++;
            if(currQuesIndex==11)
            {
                endgame();
            }
           
            setTimeout(function(){
                var audio=new Audio("/images/kbcques.mp3");
                audio.play();
                op2.style.backgroundColor="black";
                question.textContent=questions[currQuesIndex]["ques"];
                op1.textContent=questions[currQuesIndex]["options"][0];
                op2.textContent=questions[currQuesIndex]["options"][1];
                op3.textContent=questions[currQuesIndex]["options"][2];
                op4.textContent=questions[currQuesIndex]["options"][3];
            },7000)

        }
        else
        {
            op2.style.backgroundColor="red";
            if(questions[currQuesIndex]["ans"]==0)
            {
                op1.style.backgroundColor="green";
            }
            else if(questions[currQuesIndex]["ans"]==2)
            {
                op3.style.backgroundColor="green";
            }
            else if(questions[currQuesIndex]["ans"]==3)
            {
                op4.style.backgroundColor="green";
            }
            //Play some sound.....
            console.log("Amount: ",amt);
            endgame();
        }
    },3000);
})


op3.addEventListener("click",function()
{
    optionSelected=2;
    op3.style.backgroundColor="brown";
    var audi1=new Audio("/images/kbclock.mp3");
    audi1.play();
    setTimeout(function(){
        if(optionSelected==questions[currQuesIndex]["ans"])
        {
            op3.style.backgroundColor="green";
            var audio1=new Audio("/images/clap1.mp3");
            audio1.play();
            levels[10-currQuesIndex].style.backgroundColor="green";
            console.log(currQuesIndex);
            amt=prices[currQuesIndex];
            currQuesIndex++;
            if(currQuesIndex==11)
            {
                endgame();
            }
           
            setTimeout(function(){
                var audio=new Audio("/images/kbcques.mp3");
                audio.play();
                op3.style.backgroundColor="black";
                question.textContent=questions[currQuesIndex]["ques"];
                op1.textContent=questions[currQuesIndex]["options"][0];
                op2.textContent=questions[currQuesIndex]["options"][1];
                op3.textContent=questions[currQuesIndex]["options"][2];
                op4.textContent=questions[currQuesIndex]["options"][3];
            },7000)

        }
        else
        {
            op3.style.backgroundColor="red";
            if(questions[currQuesIndex]["ans"]==1)
            {
                op2.style.backgroundColor="green";
            }
            else if(questions[currQuesIndex]["ans"]==0)
            {
                op1.style.backgroundColor="green";
            }
            else if(questions[currQuesIndex]["ans"]==3)
            {
                op4.style.backgroundColor="green";
            }
            //Play some sound.....
            console.log("Amount: ",amt);
            endgame();
        }
    },3000);

    
})

op4.addEventListener("click",function()
{
    optionSelected=3;
    op4.style.backgroundColor="brown";
    var audi1=new Audio("/images/kbclock.mp3");
    audi1.play();
    setTimeout(function(){
        if(optionSelected==questions[currQuesIndex]["ans"])
        {
            op4.style.backgroundColor="green";
            var audio1=new Audio("/images/clap1.mp3");
            audio1.play();
            levels[10-currQuesIndex].style.backgroundColor="green";
            console.log(currQuesIndex);
            amt=prices[currQuesIndex];
            currQuesIndex++;
            if(currQuesIndex==11)
            {
                endgame();
            }
           
            setTimeout(function(){
                var audio=new Audio("/images/kbcques.mp3");
                audio.play();
                op4.style.backgroundColor="black";
                question.textContent=questions[currQuesIndex]["ques"];
                op1.textContent=questions[currQuesIndex]["options"][0];
                op2.textContent=questions[currQuesIndex]["options"][1];
                op3.textContent=questions[currQuesIndex]["options"][2];
                op4.textContent=questions[currQuesIndex]["options"][3];
            },7000)

        }
        else
        {
            op4.style.backgroundColor="red";
            if(questions[currQuesIndex]["ans"]==1)
            {
                op2.style.backgroundColor="green";
            }
            else if(questions[currQuesIndex]["ans"]==2)
            {
                op3.style.backgroundColor="green";
            }
            else if(questions[currQuesIndex]["ans"]==0)
            {
                op1.style.backgroundColor="green";
            }
            //Play some sound.....
            console.log("Amount: ",amt);
            endgame();
        }
    },3000);

    
})

