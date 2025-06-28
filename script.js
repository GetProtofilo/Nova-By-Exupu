const form = document.getElementById("note-form");
const input = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

let notes = JSON.parse(localStorage.getItem("insightflow-notes")) || [];

function saveNotes() {
    localStorage.setItem("insightflow-notes", JSON.stringify(notes));
}

function getSummary(note) {
    return "Summary: " + note.slice(0, 20) + "... (simulated)";
}

function renderNotes() {
    notesContainer.innerHTML = "";
    notes.forEach((note, idx) => {
        const div = document.createElement("div");
        div.className = "note";
        div.innerHTML = `
            <div>${note}</div>
            <div class="summary">${getSummary(note)}</div>
        `;
        notesContainer.appendChild(div);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    notes.push(text);
    saveNotes();
    renderNotes();
    input.value = "";
});

renderNotes();
