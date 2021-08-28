console.log("client side javascript");

const fetchWeather = (location, callback) =>
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) return callback(data.error);
      callback(undefined, data);
    })

const weatherForm = document.querySelector("form");
const searchInput = document.querySelector("input");
const messageOne = document.getElementById("message-1");
const forecastSection = document.getElementById("forecast");
messageOne.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.textContent = "Loading...";
  forecastSection.textContent = "";
  const location = searchInput.value;
  fetchWeather(location, (err, data) => {
    if (err) return messageOne.textContent = err;
    messageOne.textContent = data.location;
    const forecastEntries = Object.entries(data.forecast);
    forecastEntries.forEach((entry) => {
      const newEntry = forecastSection.appendChild(document.createElement("p"));
      newEntry.textContent = `${entry[0]}: ${entry[1]}`;
    });
  });
});
