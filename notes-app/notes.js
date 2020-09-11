const fs = require("fs");
const chalk = require("chalk");
const { array } = require("yargs");

const getNotes = () => {
  return "your notes...";
};
const addNote = (title, body) => {
  const notes = loadNotes();
  const noteDuplicate = notes.find((note) => note.title === title);
  if (!noteDuplicate) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title already taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  if (updatedNotes.length < notes.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(updatedNotes);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blueBright.inverse("Your Notes:"));
  notes.forEach((note) => {
    console.log(chalk.green(note.title));
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = (notes) => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const notes = JSON.parse(dataJSON);
    return notes;
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
