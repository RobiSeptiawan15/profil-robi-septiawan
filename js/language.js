document.addEventListener("DOMContentLoaded", function(){


const switcher = document.querySelector(".language-switcher");

const button = document.querySelector(".language");



if(button){


button.addEventListener("click", function(e){

e.stopPropagation();

switcher.classList.toggle("open");


});


}



document.addEventListener("click",function(){


if(switcher){

switcher.classList.remove("open");

}


});



const savedLanguage = localStorage.getItem("language") || "en";

loadLanguage(savedLanguage);


});





const translations = {

    en: en,

    de: de,

    id: id

};






function changeLanguage(lang){


loadLanguage(lang);


}







function loadLanguage(lang){


document
.querySelectorAll("[data-i18n]")
.forEach(element=>{


const key = element.dataset.i18n;



if(translations[lang][key]){


element.innerHTML = translations[lang][key];


}


});




const currentLang = document.getElementById("current-lang");


if(currentLang){

currentLang.innerHTML = lang.toUpperCase();

}



localStorage.setItem(
"language",
lang
);



}