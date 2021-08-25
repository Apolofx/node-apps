const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hey there");
});

app.get("/help", (req, res) => {
  res.send({
    name: "nacho",
    edad: 28,
  });
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/weather", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () =>
  console.debug(`daaalee que se prendio ese server en el ${PORT}`)
);
