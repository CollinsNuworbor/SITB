// ================= SITB SMART CALCULATOR JS =================


// ================= VARIABLES =================

let display = document.getElementById("display");

let historyList = document.getElementById("historyList");

let calcHistory =
JSON.parse(localStorage.getItem("SITB_HISTORY")) || [];

let scientificDisplay = null;



// ================= CHAMBERS =================

function openChamber(id){

    document.querySelectorAll(".chamber")
    .forEach(section=>{
        section.classList.add("hidden");
    });


    let page=document.getElementById(id);

    if(page){
        page.classList.remove("hidden");
    }


    let title=document.getElementById("title");

    if(title){
        title.innerHTML =
        id.charAt(0).toUpperCase()+id.slice(1);
    }


    if(id==="scientific"){
        scientificDisplay =
        document.getElementById("scientificDisplay");
    }

}





// ================= STANDARD CALCULATOR =================


function insert(value){

    if(display.value==="0"){
        display.value="";
    }

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

        let expression=display.value;

        let answer=eval(expression);


        addHistory(
        expression+" = "+answer
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








// ================= SCIENTIFIC =================


function getScientificDisplay(){

    if(!scientificDisplay){

        scientificDisplay =
        document.getElementById("scientificDisplay");

    }

    return scientificDisplay;

}




function sInsert(value){

    let box=getScientificDisplay();

    if(!box)return;


    if(box.value==="0"){
        box.value="";
    }


    box.value += value;

}




function sClear(){

    let box=getScientificDisplay();

    if(box){
        box.value="0";
    }

}




function sDelete(){

    let box=getScientificDisplay();

    if(box){

        box.value =
        box.value.slice(0,-1);

    }

}





function sCalculate(){

    let box=getScientificDisplay();


    try{

        box.value=eval(box.value);

    }

    catch{

        box.value="Error";

    }

}





function sFunction(type){

    let box=getScientificDisplay();

    let num=Number(box.value);



    if(type==="sin")
        box.value=Math.sin(num);


    if(type==="cos")
        box.value=Math.cos(num);


    if(type==="tan")
        box.value=Math.tan(num);


    if(type==="sqrt")
        box.value=Math.sqrt(num);


    if(type==="log")
        box.value=Math.log10(num);


    if(type==="ln")
        box.value=Math.log(num);


    if(type==="square")
        box.value=Math.pow(num,2);


    if(type==="cube")
        box.value=Math.pow(num,3);



    if(type==="factorial"){

        let result=1;

        for(let i=1;i<=num;i++){
            result*=i;
        }

        box.value=result;

    }

}








// ================= EXPLAIN =================


function showExplanation(){

alert(
"SITB Explanation\n\n"+
"Step 1: Identify numbers.\n"+
"Step 2: Follow operation rules.\n"+
"Step 3: Solve the answer."
);

}







// ================= GRAPH CALCULATOR =================


function drawGraph(){

let canvas=document.getElementById("graphCanvas");

let input=document.getElementById("graphInput");


if(!canvas || !input){
    return;
}



let equation=input.value;


let ctx=canvas.getContext("2d");



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



// AXES

ctx.beginPath();

ctx.moveTo(200,0);
ctx.lineTo(200,250);


ctx.moveTo(0,125);
ctx.lineTo(400,125);


ctx.stroke();




// GRAPH

ctx.beginPath();


for(let x=0;x<400;x++){


    let realX=(x-200)/20;


    try{


        let y =
        eval(
        equation.replace(/x/g,"("+realX+")")
        );


        let screenY=
        125-y*20;


        ctx.lineTo(
        x,
        screenY
        );


    }

    catch{

        break;

    }


}


ctx.stroke();


}







// ================= PROGRAMMER =================


function convertBinary(){

let input=
document.getElementById("programmerInput");


let result=
document.getElementById("binaryResult");


if(input && result){

result.innerHTML =
Number(input.value).toString(2);

}

}







// ================= DATE =================


function calculateDate(){

let one=
new Date(
document.getElementById("dateOne").value
);


let two=
new Date(
document.getElementById("dateTwo").value
);



let days=
Math.abs(two-one)/86400000;



document.getElementById("dateResult")
.innerHTML=
days+" days";


}







// ================= PREMIUM =================


function togglePremium(id){

let box=document.getElementById(id);


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







// ================= CONVERTERS =================


function convertLength(){
alert("Length converter coming soon");
}


function convertWeight(){
alert("Weight converter coming soon");
}


function convertVolume(){
alert("Volume converter coming soon");
}


function convertTemperature(){
alert("Temperature converter coming soon");
}


function convertEnergy(){
alert("Energy converter coming soon");
}


function convertCurrency(){
alert("Currency converter coming soon");
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

alert("Share not supported");

}

}



console.log("SITB Full Updated JS Loaded 🚀");
