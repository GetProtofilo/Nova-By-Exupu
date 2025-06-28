const form = document.getElementById("note-form");
const input = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

let notes = JSON.parse(localStorage.getItem("insightflow-notes")) || [];

function saveNotes() {
  localStorage.setItem("insightflow-notes", JSON.stringify(notes));
}

function getSummary(note) {
  return "Summary: " + note.slice(0, 30) + "...";
}

function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = `
      <div>${note}</div>
      <div class="summary">${getSummary(note)}</div>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  notes.push(text);
  input.value = "";
  saveNotes();
  renderNotes();
});

renderNotes();
