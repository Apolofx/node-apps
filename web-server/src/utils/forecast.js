const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${"cad54330eb3aefa8e51079b6c3cc26d9"}&units=metric`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      console.log(response.body);
      callback("Unable to find location", undefined);
    } else {
      console.log(response.body);

      callback(undefined, {
        ...response.body.main,
        description: response.body.weather[0].description,
        url: `http://openweathermap.org/img/wn/${response.body.weather[0].icon}@2x.png`,
      });
    }
  });
};

module.exports = forecast;
