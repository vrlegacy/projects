let cityInput=document.querySelector('input')
let submit=document.querySelector('button')
let temperatureElement=document.querySelector('.temp')


function conds(condition){

const conditionMap = {
  'clear sky': '☀️ Clear',
  'few clouds': '🌤️ A few clouds',
  'scattered clouds': '⛅ Partly cloudy',
  'broken clouds': '🌥️ Mostly cloudy',
  'overcast clouds': '☁️ Cloudy',
  'light rain': '🌦️ Light rain',
  'thunderstorm': '⛈️ Thunderstorm',
  // and so on...
};

if(conditionMap[condition]){
  console.log(conditionMap[condition])
  return conditionMap[condition];
}
else{
  console.log("error in fiding weather condition. :",condition)
  return condition;
}

}



let city;
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    city=cityInput.value;
    getWeather(city)
    display()

})


function display(){
    cityInput.value="";



}



async function getWeather(city) {
  try {
    let responce = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8aadefee0dacc7be22e658a586c1ab10&units=metric`
    );
    let data =await responce.json();
    console.log(data)

    let temp=data.main.temp;
    console.log(temp)

    let name=data.name;
    console.log(name);

    let description = data.weather[0].description;
    console.log(description);
   

    temperatureElement.textContent=`${temp}°C in ${name} and its ${conds(description)} outside`
    




    
  } catch (error) {
    console.log(error);
  }
}
