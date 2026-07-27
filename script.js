// ================= SITB ADVANCED CALCULATOR =================


// ================= CHAMBERS =================


function openChamber(id){

    let chambers = document.querySelectorAll(".chamber");

    chambers.forEach(function(chamber){

        chamber.classList.add("hidden");

    });


    let selected = document.getElementById(id);


    if(selected){

        selected.classList.remove("hidden");

    }


    let title = document.getElementById("title");


    if(title){

        title.innerHTML = id.toUpperCase();

    }

}






// ================= DARK MODE =================



function toggleDark(){

    document.body.classList.toggle("dark");

}








// ================= STANDARD CALCULATOR =================



let display = document.getElementById("display");



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


        let question = display.value;


        let answer = eval(question);


        display.value = answer;


        saveHistory(
            question + " = " + answer
        );


    }


    catch{


        display.value="Error";


    }


}







// ================= HISTORY =================



let history =
JSON.parse(localStorage.getItem("SITB_HISTORY")) || [];




function saveHistory(text){


    history.unshift(text);



    if(history.length > 20){

        history.pop();

    }



    localStorage.setItem(
        "SITB_HISTORY",
        JSON.stringify(history)
    );


    showHistory();


}





function showHistory(){


    let list =
    document.getElementById("historyList");



    if(!list){

        return;

    }



    list.innerHTML="";



    history.forEach(function(item){


        let li =
        document.createElement("li");


        li.textContent=item;


        list.appendChild(li);


    });


}



showHistory();








// ================= EXPLAIN =================



function showExplanation(){


    let problem =
    display.value;



    alert(

`🧠 SITB Explanation

Question:
${problem}

Premium AI Tutor will provide:
• Step-by-step solving
• Multiple methods
• Learning tips`

    );


}
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


    let number =
    Number(scientificDisplay.value);



    if(type==="sin"){

        scientificDisplay.value =
        Math.sin(number);

    }



    if(type==="cos"){

        scientificDisplay.value =
        Math.cos(number);

    }



    if(type==="tan"){

        scientificDisplay.value =
        Math.tan(number);

    }



    if(type==="sqrt"){

        scientificDisplay.value =
        Math.sqrt(number);

    }



    if(type==="log"){

        scientificDisplay.value =
        Math.log10(number);

    }



    if(type==="ln"){

        scientificDisplay.value =
        Math.log(number);

    }



    if(type==="square"){

        scientificDisplay.value =
        number * number;

    }



    if(type==="cube"){

        scientificDisplay.value =
        number * number * number;

    }



    if(type==="factorial"){


        let answer=1;


        for(let i=1;i<=number;i++){

            answer *= i;

        }


        scientificDisplay.value=answer;


    }


}








// ================= ADVANCED SOLVER =================



function advancedSolve(){


let input =
document.getElementById("solverInput").value;


let result =
document.getElementById("solverResult");



input =
input.toLowerCase();





// solve x+number=answer


if(input.includes("solve") && input.includes("x+")){


let equation =
input.replace("solve","").trim();



let parts =
equation.split("=");



let left =
parts[0];


let right =
Number(parts[1]);



let number =
Number(left.replace("x+",""));



result.innerHTML =
"x = " + (right-number);


return;


}






// simple multiplication equation


if(input.includes("solve") && input.includes("x*")){


let equation =
input.replace("solve","").trim();



let parts =
equation.split("=");



let number =
Number(parts[0].replace("x*",""));



let answer =
Number(parts[1]);



result.innerHTML =
"x = " + (answer/number);


return;


}






if(input.includes("derivative")){


result.innerHTML =
"Basic derivative engine coming soon.";


return;


}





if(input.includes("integral")){


result.innerHTML =
"Basic integral engine coming soon.";


return;


}





result.innerHTML =
"Try: solve 2x+5=15";



}









// ================= ADVANCED GRAPH =================



let graphZoom = 20;



function drawAdvancedGraph(){


let canvas =
document.getElementById("graphCanvas");



let input =
document.getElementById("graphInput").value;



let ctx =
canvas.getContext("2d");



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);





// Grid


ctx.strokeStyle="#cccccc";


for(let x=0;x<canvas.width;x+=20){


ctx.beginPath();

ctx.moveTo(x,0);

ctx.lineTo(x,canvas.height);

ctx.stroke();


}



for(let y=0;y<canvas.height;y+=20){


ctx.beginPath();

ctx.moveTo(0,y);

ctx.lineTo(canvas.width,y);

ctx.stroke();


}





// Axis


ctx.strokeStyle="black";


ctx.beginPath();


ctx.moveTo(
canvas.width/2,
0
);


ctx.lineTo(
canvas.width/2,
canvas.height
);



ctx.moveTo(
0,
canvas.height/2
);


ctx.lineTo(
canvas.width,
canvas.height/2
);



ctx.stroke();






// Function


ctx.beginPath();



for(let px=0;px<canvas.width;px++){



let x =
(px-canvas.width/2)/graphZoom;



try{


let equation =
input
.replace(/\^/g,"**")
.replace(/sin/g,"Math.sin")
.replace(/cos/g,"Math.cos")
.replace(/tan/g,"Math.tan")
.replace(/sqrt/g,"Math.sqrt");



let y =
eval(
equation.replace(
/x/g,
"("+x+")"
)
);



let py =
canvas.height/2 -
(y*graphZoom);



ctx.lineTo(
px,
py
);



}

catch{


return;


}



}



ctx.stroke();


}




function zoomIn(){

graphZoom +=5;

drawAdvancedGraph();

}




function zoomOut(){

graphZoom -=5;

drawAdvancedGraph();

}
// ================= PROGRAMMER =================


function convertBinary(){


let number =
Number(
document.getElementById("programmerInput").value
);



document.getElementById("programmerResult")
.innerHTML =
"Binary: " + number.toString(2);



}




function convertHex(){


let number =
Number(
document.getElementById("programmerInput").value
);



document.getElementById("programmerResult")
.innerHTML =
"Hex: " + number.toString(16).toUpperCase();



}







// ================= DATE CALCULATOR =================



function calculateDate(){


let first =
new Date(
document.getElementById("dateOne").value
);



let second =
new Date(
document.getElementById("dateTwo").value
);



let difference =
Math.abs(second-first);



let days =
Math.floor(
difference / (1000*60*60*24)
);



document.getElementById("dateResult")
.innerHTML =
days + " days";



}








// ================= CONVERTERS =================



function convertCurrency(){


let value =
Number(
document.getElementById("currencyValue").value
);



document.getElementById("currencyResult")
.innerHTML =
"$" + value;



}




function convertLength(){


let value =
Number(
document.getElementById("lengthValue").value
);



document.getElementById("lengthResult")
.innerHTML =
value + " meters = " + (value*100) + " cm";



}





function convertVolume(){


let value =
Number(
document.getElementById("volumeValue").value
);



document.getElementById("volumeResult")
.innerHTML =
value + " liters = " + (value*1000) + " ml";



}





function convertWeight(){


let value =
Number(
document.getElementById("weightValue").value
);



document.getElementById("weightResult")
.innerHTML =
value + " kg = " + (value*1000) + " g";



}






function convertTemperature(){


let value =
Number(
document.getElementById("temperatureValue").value
);



let fahrenheit =
(value*9/5)+32;



document.getElementById("temperatureResult")
.innerHTML =
value+"°C = "+fahrenheit+"°F";



}





function convertEnergy(){


let value =
Number(
document.getElementById("energyValue").value
);



document.getElementById("energyResult")
.innerHTML =
value+" Joules";



}








// ================= PREMIUM =================



function subscribe(feature){


alert(

"💎 SITB Premium\n\n"+
feature+
"\n\nPayment system can be connected here."

);


}








// ================= SHARE =================



function shareApp(){


if(navigator.share){


navigator.share({

title:"SITB Advanced Calculator",

text:"Try SITB Smart Calculator"

});


}

else{


alert("Sharing is not supported on this device.");

}


}







console.log(
"SITB Advanced Calculator Loaded 🚀"
);
