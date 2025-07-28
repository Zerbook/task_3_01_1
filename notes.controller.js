const notes = [];

function addNote() {
  const note = {
    title,
    id: Date.now().toString(),
  };

  notes.push(note);
}

function getNotes() {
  return notes;
}

module.exports = {
  addNote,
  getNotes,
};
