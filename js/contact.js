/* ===================================
   WIB CLOCK
=================================== */


function updateWIBClock(){


    const timeElement = document.getElementById("wib-time");


    if(!timeElement) return;



    const now = new Date();



    const options = {

        timeZone:"Asia/Jakarta",

        weekday:"long",

        year:"numeric",

        month:"long",

        day:"numeric",

        hour:"2-digit",

        minute:"2-digit",

        second:"2-digit",

        hour12:false

    };



    const indonesiaTime = new Intl.DateTimeFormat(
        "en-US",
        options
    ).format(now);



    timeElement.innerHTML = indonesiaTime;



}



setInterval(updateWIBClock,1000);


updateWIBClock();







/* ===================================
   WEATHER API
   Open-Meteo (No API Key)
=================================== */


async function updateWeather(){


    const weatherElement = document.getElementById("weather");

    const detailElement = document.getElementById("weather-detail");



    if(!weatherElement || !detailElement) return;



    try{


        /*
        Jakarta Coordinates

        Latitude:
        -6.2088

        Longitude:
        106.8456

        */


        const response = await fetch(

            "https://api.open-meteo.com/v1/forecast?latitude=-6.2088&longitude=106.8456&current=temperature_2m,weather_code,relative_humidity_2m&timezone=Asia%2FJakarta"

        );



        const data = await response.json();



        const temperature = data.current.temperature_2m;

        const humidity = data.current.relative_humidity_2m;

        const weatherCode = data.current.weather_code;




        let condition = "Clear Sky";



        if(weatherCode >= 1 && weatherCode <= 3){

            condition="Partly Cloudy";

        }

        else if(weatherCode >=45 && weatherCode <=48){

            condition="Fog";

        }

        else if(weatherCode >=51 && weatherCode <=67){

            condition="Rain";

        }

        else if(weatherCode >=80 && weatherCode <=99){

            condition="Thunderstorm";

        }




        weatherElement.innerHTML =

        `${temperature}°C`;



        detailElement.innerHTML =

        `${condition} • Humidity ${humidity}%`;



    }


    catch(error){


        weatherElement.innerHTML="Unavailable";


        detailElement.innerHTML=

        "Weather service unavailable";


        console.log(error);


    }



}



updateWeather();


// Update weather every 30 minutes

setInterval(updateWeather,1800000);

/* ===================================
   EMAIL SELECTOR
=================================== */


function sendEmail(){


    const email = document.getElementById("email-choice").value;


    if(!email){

        alert("Please select contact destination.");

        return;

    }


    window.location.href = "mailto:" + email;


}