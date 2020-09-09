## Creating a CLI

### Using YARGS for custom commands

Example

```javascript
// Customize CLI version
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

yargs.argv;
```

Example explained

```javascript
yargs.command({
  command: "", //(string), name for the command to be called
  description: "", //(string), description to be shown on CLI's --help
  builder: {
    //(object), object containing command's options
    title: {
      //options's label, in this case is title
      describe: "", //(string), to be shown on --options's --help
      demandOption: true, //(boolean), defines if option is required
      type: "", //(string), defines option's data type
    },
  },
  handler: (argv) => {}, //(function), takes argv as argument and defines what is supposed to do the command itself
});
```
