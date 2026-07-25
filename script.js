let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

let memory = 0;
let calcHistory = JSON.parse(localStorage.getItem("SITB_HISTORY")) || [];


// ================= BASIC CALCULATOR =================

function insert(value){
    display.value += value;
}


function clearDisplay(){
    display.value = "";
}


function deleteLast(){
    display.value = display.value.slice(0,-1);
}


function calculate(){

    try{

        let expression = display.value;

        expression = expression.replace(/π/g, Math.PI);
        expression = expression.replace(/\^/g,"**");

        let answer = eval(expression);

        addHistory(expression + " = " + answer);

        display.value = answer;

    }
    catch{

        display.value = "Error";

    }

}



// ================= HISTORY =================

function addHistory(text){

    calcHistory.unshift(text);

    if(calcHistory.length > 20){
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


function clearHistory(){

    calcHistory=[];

    localStorage.removeItem("SITB_HISTORY");

    showHistory();

}


showHistory();



// ================= SCIENTIFIC =================

function scientific(type){

    let num=Number(display.value);


    if(type==="sin")
        display.value=Math.sin(num);

    if(type==="cos")
        display.value=Math.cos(num);

    if(type==="tan")
        display.value=Math.tan(num);

    if(type==="sqrt")
        display.value=Math.sqrt(num);

    if(type==="cbrt")
        display.value=Math.cbrt(num);

}



function power(number){

    display.value=Math.pow(
        Number(display.value),
        number
    );

}



function factorial(){

    let num=Number(display.value);

    let result=1;

    for(let i=1;i<=num;i++){
        result*=i;
    }

    display.value=result;

}



// ================= MEMORY =================

function memoryClear(){
    memory=0;
}


function memoryRecall(){
    display.value=memory;
}


function memoryAdd(){
    memory+=Number(display.value);
}


function memorySubtract(){
    memory-=Number(display.value);
}



// ================= EXPLAIN =================

function showExplanation(){

let problem=display.value;


if(problem===""){
alert("Enter a calculation.");
return;
}


try{

let answer=eval(problem.replace(/\^/g,"**"));


alert(
`SITB Explanation

Problem:
${problem}

Step 1:
Read the values.

Step 2:
Apply mathematical rules.

Step 3:
Solve.

Answer:
${answer}

Premium AI Tutor coming in Version 5.0`
);


}

catch{

alert("Cannot explain.");

}


}



// ================= UNIT CONVERTER =================

function convertUnit(){

let value=Number(
document.getElementById("unitValue").value
);

let from=document.getElementById("unitFrom").value;

let to=document.getElementById("unitTo").value;

let result=value;



if(from==="km" && to==="m")
result=value*1000;

if(from==="m" && to==="km")
result=value/1000;

if(from==="m" && to==="cm")
result=value*100;

if(from==="cm" && to==="m")
result=value/100;

if(from==="kg" && to==="g")
result=value*1000;

if(from==="g" && to==="kg")
result=value/1000;



document.getElementById("unitResult").innerHTML=
"Result: "+result;

}




// ================= EQUATION SOLVER =================

function solveEquation(){

let eq=document.getElementById("equationInput").value;

let result=document.getElementById("equationResult");


try{

let parts=eq.split("=");

let right=Number(parts[1]);

let left=parts[0];

let number=Number(
left.replace("x","")
);


let answer=right-number;


result.innerHTML=
"x = "+answer;


}

catch{

result.innerHTML="Cannot solve";

}

}




// ================= MATRIX =================

function addMatrix(){

let a=document.getElementById("matrixA").value
.split(",")
.map(Number);


let b=document.getElementById("matrixB").value
.split(",")
.map(Number);


let result=a.map(
(x,i)=>x+b[i]
);


document.getElementById("matrixResult")
.innerHTML=result.join(",");

}





// ================= GRAPH =================

function drawGraph(){

let canvas=document.getElementById("graphCanvas");

let ctx=canvas.getContext("2d");


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


ctx.beginPath();


for(let x=0;x<canvas.width;x++){

let value=x-175;

let y=125-(value*value/500);


ctx.lineTo(x,y);

}


ctx.stroke();

}



// ================= DARK MODE =================

let themeBtn=document.getElementById("themeBtn");


if(themeBtn){

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

};

}



// ================= SHARE =================

function shareApp(){

if(navigator.share){

navigator.share({

title:"SITB Calculator",

text:"Try SITB Calculator"

});

}

}


console.log("SITB v4 Loaded 🚀");
