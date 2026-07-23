// =========================
// SITB Calculator
// =========================

const screen = document.getElementById("screen");
const history = document.getElementById("history");

const buttons = document.querySelectorAll(".buttons button");

let expression = "";

// Calculator
buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        // Ripple effect
        ripple(button);

        // Vibrate on phones
        if (navigator.vibrate) navigator.vibrate(15);

        if (value === "AC") {
            expression = "";
            screen.value = "0";
            history.textContent = "";
            return;
        }

        if (value === "⌫") {
            expression = expression.slice(0, -1);
            screen.value = expression || "0";
            return;
        }

        if (value === "=") {

            try {

                history.textContent = expression;

                let answer = expression
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


// =========================
// Ripple Animation
// =========================

function ripple(button){

    const circle = document.createElement("span");

    circle.className = "ripple";

    const size = Math.max(button.clientWidth, button.clientHeight);

    circle.style.width = size + "px";
    circle.style.height = size + "px";

    button.appendChild(circle);

    setTimeout(()=>{
        circle.remove();
    },500);

}


// =========================
// Share Button
// =========================

document.getElementById("shareBtn").onclick = async ()=>{

    const data = {
        title:"SITB Calculator",
        text:"Try my calculator app, SITB!",
        url:location.href
    };

    if(navigator.share){

        try{

            await navigator.share(data);

        }catch(e){}

    }else{

        navigator.clipboard.writeText(location.href);

        alert("Link copied to clipboard!");

    }

};


// =========================
// Popups
// =========================

const languageMenu = document.getElementById("languageMenu");
const settingsMenu = document.getElementById("settingsMenu");

document.getElementById("languageBtn").onclick=()=>{
    languageMenu.style.display="block";
}

document.getElementById("settingsBtn").onclick=()=>{
    settingsMenu.style.display="block";
}

document.getElementById("closeLanguage").onclick=()=>{
    languageMenu.style.display="none";
}

document.getElementById("closeSettings").onclick=()=>{
    settingsMenu.style.display="none";
}


// =========================
// Dark Mode
// =========================

const darkButton=document.querySelector("#settingsMenu button");

let dark=false;

darkButton.onclick=()=>{

    dark=!dark;

    if(dark){

        document.body.style.background="#111";

    }else{

        document.body.style.background="linear-gradient(135deg,#1d4ed8,#0f172a)";

    }

};


// =========================
// 100+ Languages
// =========================

const languages=[

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

const languageList=document.getElementById("languageList");
const search=document.getElementById("languageSearch");

function loadLanguages(list){

    languageList.innerHTML="";

    list.forEach(language=>{

        const button=document.createElement("button");

        button.textContent="🌐 "+language;

        button.onclick=()=>{

            alert("Language changed to "+language);

            languageMenu.style.display="none";

        };

        languageList.appendChild(button);

    });

}

loadLanguages(languages);

search.addEventListener("input",()=>{

    const value=search.value.toLowerCase();

    loadLanguages(

        languages.filter(language=>

            language.toLowerCase().includes(value)

        )

    );

});
