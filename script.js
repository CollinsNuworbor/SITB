// ================= SITB ENGINE =================


// ================= CHAMBERS =================


function openChamber(id){

    document.querySelectorAll(".chamber").forEach(section=>{

        section.classList.add("hidden");

    });


    let open = document.getElementById(id);


    if(open){

        open.classList.remove("hidden");

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



        addHistory(
            question+" = "+answer
        );


    }


    catch{


        display.value="Error";


    }


}








// ================= HISTORY =================


let calcHistory =
JSON.parse(localStorage.getItem("SITB_HISTORY")) || [];





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


    let list =
    document.getElementById("historyList");



    if(!list){

        return;

    }



    list.innerHTML="";



    calcHistory.forEach(item=>{


        let li=document.createElement("li");


        li.textContent=item;


        list.appendChild(li);


    });


}



showHistory();







// ================= EXPLAIN =================



function showExplanation(){


alert(

"🧠 SITB Explanation\n\n"+
"Your calculation:\n"+
display.value+
"\n\nPremium AI Tutor will give step-by-step explanations."

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


    let n =
    Number(scientificDisplay.value);



    switch(type){


        case "sin":

        scientificDisplay.value =
        Math.sin(n);

        break;



        case "cos":

        scientificDisplay.value =
        Math.cos(n);

        break;



        case "tan":

        scientificDisplay.value =
        Math.tan(n);

        break;



        case "sqrt":

        scientificDisplay.value =
        Math.sqrt(n);

        break;



        case "log":

        scientificDisplay.value =
        Math.log10(n);

        break;



        case "square":

        scientificDisplay.value =
        n*n;

        break;



        case "cube":

        scientificDisplay.value =
        n*n*n;

        break;



        case "factorial":


        let answer=1;


        for(let i=1;i<=n;i++){

            answer*=i;

        }


        scientificDisplay.value=answer;


        break;


    }

}









// ================= ADVANCED SOLVER =================



function advancedSolve(){


let question =
document.getElementById("solverInput").value.toLowerCase();



let output =
document.getElementById("solverResult");





// 2x+5=15


if(question.includes("solve") && question.includes("x+")){


let equation =
question.replace("solve","").trim();



let parts =
equation.split("=");



let add =
Number(
parts[0].replace("x+","")
);



let answer =
Number(parts[1]);



output.innerHTML =

`
Step 1:<br>
Remove ${add} from both sides.<br><br>

Step 2:<br>
Divide by the coefficient.<br><br>

Answer:<br>
x = ${answer-add}
`;

return;

}





output.innerHTML =
"Try: solve 2x+5=15";


}









// ================= AI TUTOR =================



function aiSolve(){


let question =
document.getElementById("aiQuestion")
.value
.toLowerCase();



let answer =
document.getElementById("aiAnswer");





if(question.includes("square root")){


let number =
Number(question.match(/\d+/)[0]);



answer.innerHTML =

`
Step 1:<br>
Find the number that multiplies by itself.<br><br>

√${number} = ${Math.sqrt(number)}
`;

return;

}






if(question.includes("percentage")){


let numbers =
question.match(/\d+/g);



let percent =
Number(numbers[0]);


let total =
Number(numbers[1]);



answer.innerHTML =

`
Formula:<br>
(percent ÷ 100) × total<br><br>

(${percent} ÷ 100) × ${total}<br><br>

Answer:<br>
${percent/100*total}
`;

return;

}





if(question.includes("pythagoras")){


let numbers =
question.match(/\d+/g);



let a =
Number(numbers[0]);


let b =
Number(numbers[1]);



let c =
Math.sqrt(a*a+b*b);



answer.innerHTML =

`
Formula:<br>
c² = a² + b²<br><br>

Answer:<br>
c = ${c}
`;

return;

}




answer.innerHTML =

`
I need more information.<br><br>

Examples:<br>
square root of 144<br>
percentage 20 of 500<br>
pythagoras 3 4
`;

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






// Function line


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
canvas.height/2-(y*graphZoom);



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

graphZoom+=5;

drawAdvancedGraph();

}





function zoomOut(){

graphZoom-=5;

drawAdvancedGraph();

}








// ================= PROGRAMMER =================



function convertBinary(){


let n =
Number(
document.getElementById("programmerInput").value
);



document.getElementById("programmerResult")
.innerHTML =
"Binary: "+n.toString(2);


}




function convertHex(){


let n =
Number(
document.getElementById("programmerInput").value
);



document.getElementById("programmerResult")
.innerHTML =
"Hex: "+n.toString(16).toUpperCase();


}








// ================= DATE =================



function calculateDate(){


let a =
new Date(
document.getElementById("dateOne").value
);



let b =
new Date(
document.getElementById("dateTwo").value
);



let days =
Math.abs(b-a)
/
(1000*60*60*24);



document.getElementById("dateResult")
.innerHTML =
Math.floor(days)+" days";


}








// ================= CONVERTERS =================



function convertCurrency(){

let value =
Number(
document.getElementById("currencyValue").value
);


document.getElementById("currencyResult")
.innerHTML =
"$"+value;


}



function convertLength(){

let value =
Number(
document.getElementById("lengthValue").value
);


document.getElementById("lengthResult")
.innerHTML =
value+" m = "+value*100+" cm";


}



function convertVolume(){

let value =
Number(
document.getElementById("volumeValue").value
);


document.getElementById("volumeResult")
.innerHTML =
value+" L = "+value*1000+" ml";


}




function convertWeight(){

let value =
Number(
document.getElementById("weightValue").value
);


document.getElementById("weightResult")
.innerHTML =
value+" kg = "+value*1000+" g";


}





function convertTemperature(){

let value =
Number(
document.getElementById("temperatureValue").value
);



let f =
(value*9/5)+32;



document.getElementById("temperatureResult")
.innerHTML =
value+"°C = "+f+"°F";


}




function convertEnergy(){

let value =
document.getElementById("energyValue").value;


document.getElementById("energyResult")
.innerHTML =
value+" Joules";


}








// ================= PREMIUM =================



function subscribe(feature){


alert(

"💎 SITB Premium\n\n"+
feature+
"\n\nPayment connection can be added."

);


}








// ================= SHARE =================



function shareApp(){


if(navigator.share){


navigator.share({

title:"SITB Smart Calculator",

text:"Try SITB Advanced Calculator"

});


}

else{


alert("Share not supported");

}


}





console.log("🔥 SITB COMPLETE ENGINE LOADED");
