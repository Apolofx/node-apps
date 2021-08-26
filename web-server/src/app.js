const path = require('path')
const express = require("express");

const app = express();

// here we setup a public directory
// Any files placed there will be served
// and available from the server's root
const public = path.join(__dirname, '../public')

app.use(express.static(public))

app.get("/weather", (req, res) => {
  res.send({
    forecast: 'it is snowing',
    location: "casare"
  });
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () =>
  console.debug(`daaalee que se prendio ese server en el ${PORT}`)
);
