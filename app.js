const apiKey = "79ac3f5d68cd5bae50b88a68c94dbbd5";
const city = "London";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
.then(function(response){

  const data = response.data;

  document.getElementById("city").innerText = data.name;

  document.getElementById("temperature").innerText =
  "Temperature: " + data.main.temp + " °C";

  document.getElementById("description").innerText =
  data.weather[0].description;

  const icon =
  "https://openweathermap.org/img/wn/" +
  data.weather[0].icon +
  "@2x.png";

  document.getElementById("icon").src = icon;

})
.catch(function(error){
  console.log(error);
});";
const city = "London";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
.then(function(response){

  const data = response.data;

  document.getElementById("city").innerText = data.name;

  document.getElementById("temperature").innerText =
  "Temperature: " + data.main.temp + " °C";

  document.getElementById("description").innerText =
  data.weather[0].description;

  const icon =
  "https://openweathermap.org/img/wn/" +
  data.weather[0].icon +
  "@2x.png";

  document.getElementById("icon").src = icon;

})
.catch(function(error){
  console.log(error);
});
