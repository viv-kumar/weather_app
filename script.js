async function fetchWeather() {
  const cityName = document.getElementById("input-location").value;

  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"20a08f246d297dc7c91540a3ef6c4798"}&units=metric`;
  const database = await getWeatherInfo(cityUrl);
  console.log(database);
  showToUi(database);
}
async function getWeatherInfo(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
  // console.log(data);
}
// let str=['A',...'EIO','U']
// console.log(str);
const months = [
  "Jan",
  "Febr",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const weather = {
  Rain: "https://i.pinimg.com/originals/b1/cd/36/b1cd36614ed294ba79e0eb774b7742d4.gif",
  Clouds:
    "https://media.tenor.com/f14xUacYc1oAAAAd/storm-world-meteorological-day.gif",
  Clear:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmr-GUFyRepsH3jhMFsnyQfopRY8rG95nVmQ&usqp=CAU",
  Haze: "https://i.gifer.com/IJNX.gif",
  Smoke:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2P-vUkMqYQUbqM--wXVZlMLQXVkz4clkZw&usqp=CAU",
  Mist: "https://i.gifer.com/CKtq.gif",
};
const date = new Date();
console.log(date.toLocaleTimeString(date.getMinutes()), date.getUTCDate());
function showToUi(obj) {
  document.getElementById("middle1_child").innerHTML = "";
  const div1 = document.createElement("div");
  const timetag = document.createElement("h3");
  const place = document.createElement("h1");
  place.innerText = obj.name;
  timetag.innerText = `${
    months[date.getUTCMonth()]
  } ${date.getUTCDate()},${date.toLocaleTimeString()}`;
  div1.append(timetag, place);
  const div2 = document.createElement("div");
  const weatherimg = document.createElement("img");
  weatherimg.src = weather[obj.weather[0].main];
  const temp = document.createElement("h1");
  temp.innerText = `${obj.main.temp}°C`;
  const desc = document.createElement("p");
  desc.innerText = [obj.weather[0].description];
  temp.append(desc);
  div2.append(weatherimg, temp);
  document.getElementById(
    "gmap_canvas"
  ).src = `https://maps.google.com/maps?q=${obj.name}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  document.getElementById("middle1_child").append(div1, div2);
}
