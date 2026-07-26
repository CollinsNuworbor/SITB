// ================= DISPLAY =================

let display = document.getElementById("display");

let historyList = document.getElementById("historyList");

let calcHistory =
JSON.parse(localStorage.getItem("SITB_HISTORY")) || [];



// ================= CHAMBERS =================

function openChamber(id){

    document.querySelectorAll(".chamber")
    .forEach(section=>{
        section.classList.add("hidden");
    });


    document.getElementById(id)
    .classList.remove("hidden");


    document.getElementById("title").innerHTML =
    id.charAt(0).toUpperCase()+id.slice(1);

}





// ================= STANDARD CALCULATOR =================


function insert(value){

    if(display.value==="0")
    display.value="";

    display.value += value;

}



function clearDisplay(){

    display.value="0";

}



function deleteLast(){

    display.value =
    display.value.slice(0,-1);

}



function calculate(){

    try{

        let answer =
        eval(display.value);


        addHistory(
        display.value+" = "+answer
        );


        display.value=answer;

    }

    catch{

        display.value="Error";

    }

}




// ================= HISTORY =================


function addHistory(text){

    calcHistory.unshift(text);


    if(calcHistory.length>20){

        calcHistory.pop();

    }


    localStorage.setItem(
    "SITB_HISTORY",
    JSON.stringify(calcHistory)
    );


    showHistory();

}



function showHistory(){

    if(!historyList)return;


    historyList.innerHTML="";


    calcHistory.forEach(item=>{


        let li=document.createElement("li");

        li.textContent=item;

        historyList.appendChild(li);


    });

}


showHistory();







// ================= SCIENTIFIC CALCULATOR =================


let scientificDisplay =
document.getElementById("scientificDisplay");



function sInsert(value){

    if(scientificDisplay.value==="0"){

        scientificDisplay.value="";

    }


    scientificDisplay.value += value;

}





function sClear(){

    scientificDisplay.value="0";

}




function sDelete(){

    scientificDisplay.value =
    scientificDisplay.value.slice(0,-1);

}





function sCalculate(){

    try{


        scientificDisplay.value =
        eval(scientificDisplay.value);


    }

    catch{


        scientificDisplay.value="Error";

    }

}






function sFunction(type){


let num =
Number(scientificDisplay.value);



if(type==="sin"){

scientificDisplay.value=Math.sin(num);

}


if(type==="cos"){

scientificDisplay.value=Math.cos(num);

}



if(type==="tan"){

scientificDisplay.value=Math.tan(num);

}



if(type==="sqrt"){

scientificDisplay.value=Math.sqrt(num);

}



if(type==="log"){

scientificDisplay.value=Math.log10(num);

}



if(type==="ln"){

scientificDisplay.value=Math.log(num);

}



if(type==="square"){

scientificDisplay.value=Math.pow(num,2);

}



if(type==="cube"){

scientificDisplay.value=Math.pow(num,3);

}



if(type==="factorial"){


let result=1;


for(let i=1;i<=num;i++){

result*=i;

}


scientificDisplay.value=result;


}


}








// ================= EXPLAIN =================


function showExplanation(){

alert(
"SITB Explanation\n\n"+
"Step 1: Identify numbers and operations.\n\n"+
"Step 2: Follow mathematical rules.\n\n"+
"Step 3: Calculate the answer."
);

}







// ================= GRAPH =================


function drawGraph(){


let canvas =
document.getElementById("graphCanvas");


if(!canvas)return;


let ctx =
canvas.getContext("2d");


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



ctx.beginPath();



for(let x=0;x<canvas.width;x++){

let y=
125-Math.sin(x/20)*50;

ctx.lineTo(x,y);

}


ctx.stroke();


}








// ================= PROGRAMMER =================


function convertBinary(){


let num =
Number(
document.getElementById("programmerInput").value
);


document.getElementById("binaryResult").innerHTML =
num.toString(2);


}








// ================= DATE =================


function calculateDate(){


let first =
new Date(
document.getElementById("dateOne").value
);


let second =
new Date(
document.getElementById("dateTwo").value
);



let result =
Math.abs(second-first)
/
86400000;



document.getElementById("dateResult").innerHTML =
result+" days";


}







// ================= PREMIUM =================


function togglePremium(id){


let box =
document.getElementById(id);


if(box.style.display==="block"){

box.style.display="none";

}

else{

box.style.display="block";

}


}







// ================= DARK MODE =================


function toggleDark(){

document.body.classList.toggle("dark");

}







// ================= SHARE =================


function shareApp(){


if(navigator.share){


navigator.share({

title:"SITB Smart Calculator",

text:"Try SITB Calculator"

});


}

else{

alert("Sharing not supported");

}


}



console.log("SITB Scientific Calculator Loaded 🚀");
