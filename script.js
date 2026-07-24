// ======================================
// SITB Calculator - Part 1
// ======================================

// Display
const screen = document.getElementById("screen");
const history = document.getElementById("history");

// Buttons
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

// =======================
// Calculator
// =======================

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        // Ripple
        createRipple(button);

        // Ignore menu buttons
        if (
            button.id === "languageBtn" ||
            button.id === "shareBtn" ||
            button.id === "settingsBtn"
        ) return;

        switch (value) {

            case "AC":
                expression = "";
                history.textContent = "";
                screen.value = "0";
                return;

            case "⌫":
                expression = expression.slice(0, -1);
                screen.value = expression || "0";
                return;

            case "=":

                try {

                    history.textContent = expression;

                    const answer = expression
                        .replace(/×/g, "*")
                        .replace(/÷/g, "/")
                        .replace(/−/g, "-");

                    expression = eval(answer).toString();

                    screen.value = expression;

                } catch {

                    screen.value = "Error";
                    expression = "";

                }

                return;

        }

        expression += value;
        screen.value = expression;

    });

});

// =======================
// Ripple
// =======================

function createRipple(button){

    const ripple=document.createElement("span");

    ripple.className="ripple";

    button.appendChild(ripple);

    setTimeout(()=>{

        ripple.remove();

    },400);

}

// =======================
// Settings Window
// =======================

const settingsMenu=document.getElementById("settingsMenu");

document.getElementById("settingsBtn").onclick=()=>{

    settingsMenu.style.display="block";

};

document.getElementById("closeSettings").onclick=()=>{

    settingsMenu.style.display="none";

};

// =======================
// Language Window
// =======================

const languageMenu=document.getElementById("languageMenu");

document.getElementById("languageBtn").onclick=()=>{

    languageMenu.style.display="block";

};

document.getElementById("closeLanguage").onclick=()=>{

    languageMenu.style.display="none";

};

// =======================
// Dark Mode
// =======================

let dark=false;

document.getElementById("darkModeBtn").onclick=()=>{

    dark=!dark;

    document.body.classList.toggle("dark");

};

// =======================
// Share
// =======================

document.getElementById("shareBtn").onclick=async()=>{

    if(navigator.share){

        try{

            await navigator.share({

                title:"SITB Calculator",

                text:"Check out my SITB Calculator!",

                url:location.href

            });

        }catch(e){}

    }else{

        alert("Sharing isn't supported on this device.");

    }

};

// =======================
// Sounds
// =======================

let soundOn=true;

document.getElementById("soundBtn").onclick=()=>{

    soundOn=!soundOn;

    alert("Sounds " + (soundOn ? "ON" : "OFF"));

};

// =======================
// Vibration
// =======================

let vibrationOn=true;

document.getElementById("vibrationBtn").onclick=()=>{

    vibrationOn=!vibrationOn;

    if(vibrationOn && navigator.vibrate){

        navigator.vibrate(200);

    }

    alert("Vibration " + (vibrationOn ? "ON" : "OFF"));

};

// =======================
// About
// =======================

document.getElementById("aboutBtn").onclick=()=>{

    alert("SITB Calculator\nVersion 2.0");

};
