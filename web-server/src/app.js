require("dotenv").config();
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// Define paths for express config
const public = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

// Setup directory to serve static files
app.use(express.static(public));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Nacho Consolani",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Nacho Consolani",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "This is a help message",
    name: "Nacho Consolani",
  });
});

app.get("/weather", (req, res) => {
  const { address } = req.query;
  if (!address) return res.send({ error: "You must provide a valid address" });

  geocode(address, (error, { latitude, longitude, location } = {}) => {
    console.log(location);
    if (error) return res.send({ error });

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) return res.send({ error });
      return res.send({
        location,
        forecast: forecastData,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help article not found",
    name: "Nacho Consolani",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "404 Not Found",
    name: "Nacho Consolani",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () =>
  console.debug(`daaalee que se prendio ese server en el ${PORT}`)
);
