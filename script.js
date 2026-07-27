// ================= SITB SMART CALCULATOR JS =================


// ================= CHAMBERS =================


function openChamber(id){

    document.querySelectorAll(".chamber")
    .forEach(section=>{
        section.classList.add("hidden");
    });


    let chamber=document.getElementById(id);

    if(chamber){

        chamber.classList.remove("hidden");

    }


    let title=document.getElementById("title");

    if(title){

        title.innerHTML =
        id.charAt(0).toUpperCase()+id.slice(1);

    }

}





// ================= STANDARD CALCULATOR =================


let display=document.getElementById("display");

let historyList=document.getElementById("historyList");


let history =
JSON.parse(localStorage.getItem("SITB_HISTORY")) || [];




function insert(value){

    if(display.value==="0"){

        display.value="";

    }

    display.value+=value;

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

        let question=display.value;

        let answer=eval(question);


        saveHistory(
        question+" = "+answer
        );


        display.value=answer;


    }

    catch{

        display.value="Error";

    }

}






// ================= HISTORY =================



function saveHistory(text){

    history.unshift(text);


    if(history.length>20){

        history.pop();

    }


    localStorage.setItem(
    "SITB_HISTORY",
    JSON.stringify(history)
    );


    showHistory();

}





function showHistory(){

    if(!historyList)return;


    historyList.innerHTML="";


    history.forEach(item=>{


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



switch(type){


case "sin":

scientificDisplay.value=Math.sin(num);

break;



case "cos":

scientificDisplay.value=Math.cos(num);

break;



case "tan":

scientificDisplay.value=Math.tan(num);

break;



case "sqrt":

scientificDisplay.value=Math.sqrt(num);

break;



case "log":

scientificDisplay.value=Math.log10(num);

break;



case "ln":

scientificDisplay.value=Math.log(num);

break;



case "square":

scientificDisplay.value=Math.pow(num,2);

break;



case "cube":

scientificDisplay.value=Math.pow(num,3);

break;



case "factorial":


let result=1;


for(let i=1;i<=num;i++){

result*=i;

}


scientificDisplay.value=result;


break;


}


}







// ================= GRAPH =================



function drawGraph(){


let canvas=document.getElementById("graphCanvas");

let input=document.getElementById("graphInput");



if(!canvas || !input)return;



let equation=input.value;


let ctx=canvas.getContext("2d");



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



// axes

ctx.beginPath();

ctx.moveTo(200,0);

ctx.lineTo(200,250);


ctx.moveTo(0,125);

ctx.lineTo(400,125);

ctx.stroke();




// graph

ctx.beginPath();



for(let x=0;x<400;x++){


let realX=(x-200)/20;


try{


let y =
eval(
equation.replace(/x/g,"("+realX+")")
);



let screenY =
125-(y*20);



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


let number =
Number(
document.getElementById("programmerInput").value
);



document.getElementById("binaryResult").innerHTML =
"Binary: "+number.toString(2);


}







// ================= DATE =================



function calculateDate(){


let one =
new Date(
document.getElementById("dateOne").value
);



let two =
new Date(
document.getElementById("dateTwo").value
);



let days =
Math.abs(two-one)
/86400000;



document.getElementById("dateResult")
.innerHTML =
days+" days";


}







// ================= PREMIUM =================



function premiumAlert(){

alert(
"💎 SITB Premium\n\n"+
"This feature requires a subscription."
);

}





function subscribe(plan){


if(plan==="monthly"){


alert(
"💎 Monthly Plan\n\n"+
"Price: $10 / Month\n\n"+
"Payment system will be connected later."
);


}



if(plan==="yearly"){


alert(
"👑 Yearly Plan\n\n"+
"Price: $120 / Year\n\n"+
"Payment system will be connected later."
);


}


}








// ================= CONVERTERS =================



function convertCurrency(){

alert("Currency Converter coming soon");

}


function convertLength(){

alert("Length Converter coming soon");

}


function convertVolume(){

alert("Volume Converter coming soon");

}


function convertWeight(){

alert("Weight Converter coming soon");

}


function convertTemperature(){

alert("Temperature Converter coming soon");

}


function convertEnergy(){

alert("Energy Converter coming soon");

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

text:"Try SITB Smart Calculator"

});


}

else{


alert("Sharing not supported");

}


}



console.log("SITB New System Loaded 🚀");
