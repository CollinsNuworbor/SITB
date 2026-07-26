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


    let page=document.getElementById(id);


    if(page){

        page.classList.remove("hidden");

    }


    document.getElementById("title").innerHTML =
    id.charAt(0).toUpperCase()+id.slice(1);

}





// ================= CALCULATOR =================


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


}





function factorial(){


let num=Number(display.value);

let result=1;


for(let i=1;i<=num;i++){

result*=i;

}


display.value=result;


}







// ================= EXPLAIN =================


function showExplanation(){


let problem=display.value;


alert(

"SITB Explanation\n\n"+

"Problem: "+problem+

"\n\nStep 1: Identify numbers and operations."+

"\nStep 2: Follow mathematical order."+

"\nStep 3: Calculate the answer."

);


}







// ================= DARK MODE =================


function toggleDark(){

document.body.classList.toggle("dark");

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








// ================= GRAPH =================


function drawGraph(){


let canvas=document.getElementById("graphCanvas");


if(!canvas)return;


let ctx=canvas.getContext("2d");


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


let num=
Number(
document.getElementById("programmerInput").value
);


document.getElementById("binaryResult")
.innerHTML =
num.toString(2);


}








// ================= DATE =================


function calculateDate(){


let a=
new Date(
document.getElementById("dateOne").value
);


let b=
new Date(
document.getElementById("dateTwo").value
);



let days=
Math.abs(
b-a
)
/
86400000;



document.getElementById("dateResult")
.innerHTML =
days+" days";


}







// ================= CONVERTERS =================


function convertLength(){

let value=
Number(
document.getElementById("lengthValue").value
);


alert(value+" meters");

}



function convertWeight(){

let value=
Number(
document.getElementById("weightValue").value
);


alert(value+" kg");

}



function convertTemperature(){

let value=
Number(
document.getElementById("temperatureValue").value
);


alert(
(value*9/5+32)+" °F"
);

}



function convertVolume(){

let value=
Number(
document.getElementById("volumeValue").value
);


alert(value+" liters");

}



function convertEnergy(){

let value=
Number(
document.getElementById("energyValue").value
);


alert(value+" joules");

}



function convertCurrency(){

let value=
Number(
document.getElementById("currencyValue").value
);


alert("$"+value);

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


alert(
"Share not supported"
);


}


}





console.log("SITB v4.5 Loaded 🚀");
