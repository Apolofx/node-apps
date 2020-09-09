const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// Customize yargs version
yargs.version("1.0.0");

//Create add command
yargs.command({
  command: "add",
  description: "Adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  description: "Removes note",
  handler: () => console.log("Removing note"),
});

//Create list command
yargs.command({
  command: "list",
  description: "Lists notes",
  handler: () => console.log("Listing notes"),
});

//Create read command
yargs.command({
  command: "read",
  description: "Reads note",
  handler: () => console.log("Reading note"),
});

yargs.argv;
