let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

let memory = 0;
let calcHistory = [];


// ================= BASIC =================

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

        let answer = eval(
            expression.replace(/\^/g,"**")
        );

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

    if(calcHistory.length > 10){
        calcHistory.pop();
    }


    if(historyList){

        historyList.innerHTML="";

        calcHistory.forEach(item=>{

            let li=document.createElement("li");

            li.textContent=item;

            historyList.appendChild(li);

        });

    }

}



// ================= SCIENTIFIC =================

function scientific(type){

    let num = Number(display.value);


    if(type=="sin"){
        display.value=Math.sin(num);
    }

    if(type=="cos"){
        display.value=Math.cos(num);
    }

    if(type=="tan"){
        display.value=Math.tan(num);
    }

    if(type=="sqrt"){
        display.value=Math.sqrt(num);
    }

    if(type=="cbrt"){
        display.value=Math.cbrt(num);
    }

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



// ================= REAL EXPLAIN =================

function showExplanation(){

    let problem = display.value;


    if(problem===""){

        alert("Type a calculation first.");

        return;

    }


    let answer;


    try{

        answer = eval(
            problem.replace(/\^/g,"**")
        );

    }

    catch{

        alert("This calculation cannot be explained.");

        return;

    }



    let message = 
`SITB Learning Explanation

Problem:
${problem}

Step 1:
Identify the numbers and operations.

Step 2:
Apply mathematical rules.

Step 3:
Calculate the final result.

Final Answer:
${answer}


SITB Premium 5.0 AI Tutor:
Advanced explanations, different methods, and personalized learning will be available there.`;


    alert(message);

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



console.log("SITB v3 Running");
