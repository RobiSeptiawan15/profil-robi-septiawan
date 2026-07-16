/* ===================================
   LOADING SCREEN
=================================== */


window.addEventListener("load",()=>{


    const loading = document.querySelector(".loading");


    setTimeout(()=>{


        loading.style.display="none";


    },1500);



});







/* ===================================
   NAVBAR SCROLL EFFECT
=================================== */


const header = document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.classList.add("scrolled");


    }else{


        header.classList.remove("scrolled");


    }


});








/* ===================================
   MOBILE MENU
=================================== */


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");




if(menuToggle){


    menuToggle.addEventListener("click",()=>{


        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("open");


    });


}








/* ===================================
   CLOSE MENU AFTER CLICK
=================================== */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});








/* ===================================
   SCROLL REVEAL
=================================== */


const revealElements = document.querySelectorAll(
    
    ".section, .hero-content, .hero-image"

);



const revealObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });



},


{

    threshold:.15

}



);





revealElements.forEach(el=>{


    el.classList.add("hidden");


    revealObserver.observe(el);


});









/* ===================================
   LANGUAGE SYSTEM
=================================== */


const languageButton =
document.querySelector(".language");



let currentLanguage="en";





const languageData={



id:{


hello:"Halo, Saya",

title:"Membangun Sistem Elektrikal & Otomasi Yang Handal",

role:
"Electrical Engineer\nAutomation Engineer\nHVAC Engineer",

download:"Download CV",

contact:"Hubungi Saya"


},





en:{


hello:"Hello, I'm",

title:"Building Reliable Electrical & Automation Systems",

role:
"Electrical Engineer\nAutomation Engineer\nHVAC Engineer",

download:"Download CV",

contact:"Contact Me"


},





de:{


hello:"Hallo, ich bin",

title:"Zuverlässige Elektro- und Automatisierungssysteme entwickeln",

role:
"Elektroingenieur\nAutomatisierungsingenieur\nHLK-Ingenieur",

download:"Lebenslauf herunterladen",

contact:"Kontakt"


}


};








function changeLanguage(){



const data = languageData[currentLanguage];



document.querySelector(".hello").innerText=data.hello;


document.querySelector(".hero-content h1").innerText=data.title;


document.querySelector(".role").innerText=data.role;


document.querySelector(".btn-primary").innerText=data.download;


document.querySelector(".btn-secondary").innerText=data.contact;



}







languageButton.addEventListener("click",()=>{


if(currentLanguage==="en"){


    currentLanguage="id";


    languageButton.innerHTML="🌐 ID";


}

else if(currentLanguage==="id"){


    currentLanguage="de";


    languageButton.innerHTML="🌐 DE";


}

else{


    currentLanguage="en";


    languageButton.innerHTML="🌐 EN";


}




changeLanguage();



});

/* ===================================
   ACTIVE NAVBAR MENU
=================================== */


const currentPage =
window.location.pathname.split("/").pop();



document.querySelectorAll(".nav-links a")
.forEach(link=>{


    const linkPage =
    link.getAttribute("href");



    if(linkPage === currentPage){


        link.classList.add("active");


    }


});