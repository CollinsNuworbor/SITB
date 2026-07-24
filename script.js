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
// ======================================
// SITB Calculator - Part 2
// Languages, Themes & History
// ======================================

// ---------- Languages ----------

const languages = [

"English","Spanish","French","German","Italian","Portuguese","Chinese","Japanese","Korean","Arabic",
"Hindi","Bengali","Russian","Turkish","Greek","Dutch","Swedish","Norwegian","Danish","Finnish",
"Polish","Czech","Slovak","Romanian","Hungarian","Hebrew","Thai","Vietnamese","Malay","Indonesian",
"Filipino","Swahili","Zulu","Afrikaans","Amharic","Yoruba","Igbo","Hausa","Somali","Persian",
"Urdu","Punjabi","Tamil","Telugu","Gujarati","Kannada","Malayalam","Marathi","Nepali","Sinhala",
"Khmer","Lao","Mongolian","Kazakh","Uzbek","Turkmen","Kyrgyz","Tajik","Ukrainian","Belarusian",
"Croatian","Serbian","Bosnian","Slovenian","Bulgarian","Estonian","Latvian","Lithuanian","Irish",
"Welsh","Scottish Gaelic","Basque","Catalan","Galician","Esperanto","Latin","Maltese","Icelandic",
"Luxembourgish","Albanian","Macedonian","Armenian","Georgian","Azerbaijani","Pashto","Kurdish",
"Javanese","Sundanese","Maori","Samoan","Tongan","Fijian","Hawaiian","Quechua","Guarani","Xhosa",
"Sesotho","Tswana","Shona","Malagasy","Chichewa","Oromo","Tigrinya","Breton","Corsican","Frisian"

];

const languageList = document.getElementById("languageList");
const languageSearch = document.getElementById("languageSearch");

function showLanguages(list){

    languageList.innerHTML="";

    list.forEach(language=>{

        const btn=document.createElement("button");

        btn.textContent="🌐 "+language;

        btn.onclick=()=>{

            localStorage.setItem("sitbLanguage",language);

            alert("Language changed to " + language);

            languageMenu.style.display="none";

        };

        languageList.appendChild(btn);

    });

}

showLanguages(languages);

languageSearch.addEventListener("input",()=>{

    const value=languageSearch.value.toLowerCase();

    showLanguages(

        languages.filter(language=>

            language.toLowerCase().includes(value)

        )

    );

});

// ---------- Themes ----------

const themes=[

"#2563eb",
"#9333ea",
"#16a34a",
"#dc2626",
"#f59e0b",
"#0891b2"

];

let themeIndex=0;

document.getElementById("themeBtn").onclick=()=>{

    themeIndex++;

    if(themeIndex>=themes.length){

        themeIndex=0;

    }

    document.documentElement.style.setProperty(
        "--theme",
        themes[themeIndex]
    );

    localStorage.setItem("sitbTheme",themeIndex);

};

// ---------- Restore Theme ----------

const savedTheme=localStorage.getItem("sitbTheme");

if(savedTheme!==null){

    themeIndex=parseInt(savedTheme);

    document.documentElement.style.setProperty(
        "--theme",
        themes[themeIndex]
    );

}

// ---------- Save Dark Mode ----------

const savedDark=localStorage.getItem("sitbDark");

if(savedDark==="true"){

    dark=true;

    document.body.classList.add("dark");

}

document.getElementById("darkModeBtn").onclick=()=>{

    dark=!dark;

    document.body.classList.toggle("dark");

    localStorage.setItem("sitbDark",dark);

};

// ---------- Calculator History ----------

let calculations=[];

const oldEquals=document.querySelector(".equals");

oldEquals.addEventListener("click",()=>{

    if(screen.value!=="Error"){

        calculations.unshift(history.textContent+" = "+screen.value);

        if(calculations.length>20){

            calculations.pop();

        }

        localStorage.setItem(

            "sitbHistory",

            JSON.stringify(calculations)

        );

    }

});

document.getElementById("aboutBtn").onclick=()=>{

    const savedLanguage=localStorage.getItem("sitbLanguage") || "English";

    alert(

"SITB Calculator\n\n"+
"Version 2.0\n\n"+
"Language: "+savedLanguage+"\n"+
"History Saved: "+calculations.length+"\n\n"+
"Created by You ❤️"

    );

};

// ---------- Startup ----------

const savedHistory=localStorage.getItem("sitbHistory");

if(savedHistory){

    calculations=JSON.parse(savedHistory);

}

console.log("SITB v2 Loaded Successfully");
