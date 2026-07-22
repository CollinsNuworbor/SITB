const languages = [

"English",
"Spanish",
"French",
"German",
"Italian",
"Portuguese",
"Chinese",
"Japanese",
"Korean",
"Arabic",
"Hindi",
"Bengali",
"Russian",
"Turkish",
"Greek",
"Dutch",
"Swedish",
"Norwegian",
"Danish",
"Finnish",
"Polish",
"Czech",
"Slovak",
"Ukrainian",
"Romanian",
"Hungarian",
"Hebrew",
"Thai",
"Vietnamese",
"Indonesian",
"Malay",
"Filipino",
"Swahili",
"Zulu",
"Afrikaans",
"Amharic",
"Yoruba",
"Igbo",
"Hausa",
"Somali",
"Persian",
"Urdu",
"Punjabi",
"Tamil",
"Telugu",
"Marathi",
"Gujarati",
"Kannada",
"Malayalam",
"Nepali",
"Sinhala",
"Khmer",
"Lao",
"Georgian",
"Armenian",
"Azerbaijani",
"Kazakh",
"Uzbek",
"Mongolian",
"Serbian",
"Croatian",
"Bulgarian",
"Slovenian",
"Estonian",
"Latvian",
"Lithuanian",
"Icelandic",
"Irish",
"Welsh",
"Basque",
"Catalan",
"Galician",
"Latin",
"Esperanto",
"Albanian",
"Macedonian",
"Bosnian",
"Pashto",
"Kurdish",
"Tajik",
"Turkmen",
"Kirghiz",
"Maori",
"Samoan",
"Tongan",
"Fijian",
"Hawaiian",
"Quechua",
"Guarani",
"Xhosa",
"Sesotho",
"Tswana",
"Malagasy",
"Shona",
"Rwandan",
"Kirundi",
"Luxembourgish",
"Maltese",
"Corsican",
"Frisian",
"Yiddish",
"Javanese",
"Sundanese",
"Balinese",
"Marwari",
"Faroese",
"Greenlandic"
];


const btn = document.querySelector(".language-btn");
const menu = document.querySelector(".language-menu");
const close = document.querySelector(".close");
const list = document.querySelector(".languages");
const search = document.querySelector(".language-search");
const selected = document.querySelector("#selected");


function showLanguages(items){

    list.innerHTML="";

    items.forEach(lang=>{

        let button=document.createElement("button");

        button.textContent=lang;

        button.onclick=()=>{

            selected.textContent="Selected: "+lang;

            menu.style.display="none";

        };

        list.appendChild(button);

    });

}


showLanguages(languages);


btn.onclick=()=>{

    menu.style.display="block";

};


close.onclick=()=>{

    menu.style.display="none";

};


search.onkeyup=()=>{

    let value=search.value.toLowerCase();

    let filtered=languages.filter(lang=>
        lang.toLowerCase().includes(value)
    );

    showLanguages(filtered);

};
