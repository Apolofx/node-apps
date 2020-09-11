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

With YARGS `argv` parameter, we access to Node's process.argv array where the command line arguments vector is located. Therefore, if we have to access to an argument value, we use `argv.<argument_name>`.
Thats how we handle commands within handler functions, just passing argv as the handler's parameter.

## Debugging

- **`console.log()`**
- Node debugger:
  For this we add the keyword `debugger` in the line of code we want to inspect, and run the file with `node` command followed by the `inspect` command.
  Example: `node inspect file.js`
  We now can access to Chrome's debugger at chrome://inspect to debug our app.

## Node's FileSystem module

### `fs.readFileSync('path')`

Takes a path as the argument and returns a buffer (chain of bytes).
Then we can access to its content with `toString()` method.

### `fs.writeFileSync('fileName',data)`

Takes file name and the data that needs to be saved in it.

Example:

```javascript
//readFileSync
const dataBuffer = fs.readFileSync("/my/path");
const dataString = dataBuffer.toString();
//if data is JSON
const dataToJSON = JSON.parse(dataString);

//writeFileSync
const data = "Hi i am a new file created with writeFileSync() function";
fs.writeFileSync("fileName", data);
```
