const apikey=  "8e9749d1148e74c690611b9bf09e75e6"
 

 
 let clicker=document.querySelector("#clicker");
let airspeed = document.querySelector("#airspeed");
let cityInput=document.querySelector("#cityInput");
let area=document.querySelector(".temp");
 let humid=document.querySelector("#humid");
 let cityname=document.querySelector("#city")
 let visibility=document.querySelector("#visibility")


 
      async function getWeather(city) {
        

        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},{IN}&appid=${apikey}&units=metric`;  

          const response = await fetch(url);
          const data = await response.json();
           console.log(data)
          // fahrenheit = (data.main.temp)
          // fahrenheitToCelsius(fahrenheit)

          // function fahrenheitToCelsius(fahrenheit)
          //  {
          //   cel= (fahrenheit - 32) * (5/9);
          //   cel=cel.toFixed(2)       
          // }
              area.innerHTML=("Temp is:" + " " + data.main.temp +"°C");
              humid.innerHTML=data.wind.speed;
              cityname.innerHTML=data.name;
              airspeed.innerHTML=data.wind.speed;
              humid.innerHTML=data.main.humidity;
              visibility.innerHTML=data.visibility;

        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      
      }
    document.querySelector("#cityForm").addEventListener("submit", function (event) {
      event.preventDefault();  
      const cityInput = document.querySelector("#cityInput").value;
      getWeather(cityInput);
  });
       