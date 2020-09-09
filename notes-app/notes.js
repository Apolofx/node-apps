const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const notesDuplicate = notes.filter((note) => note.title === title);
  if (notesDuplicate.length === 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title already taken!"));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  if (updatedNotes.length < notes.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(updatedNotes);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const saveNotes = function (notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = function (notes) {
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
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
