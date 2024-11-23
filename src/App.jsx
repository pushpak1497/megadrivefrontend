import { useState, useEffect } from "react";
import axios from "axios";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/notes`)
      .then((response) => setNotes(response.data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, [searchQuery]);

  const handleAddNote = (newNote) => {
    axios
      .post("http://localhost:5000/api/notes", newNote)
      .then((response) => setNotes([...notes, response.data]))
      .catch((error) => console.error("Error adding note:", error));
  };

  const handleDeleteNote = (id) => {
    axios
      .delete(`http://localhost:5000/api/notes/${id}`)
      .then(() => setNotes(notes.filter((note) => note._id !== id)))
      .catch((error) => console.error("Error deleting note:", error));
  };

  const handleEditNote = (note) => {
    setNoteToEdit(note);
  };

  const handleSaveNote = (note) => {
    if (note._id) {
      axios
        .put(`http://localhost:5000/api/notes/${note._id}`, note)
        .then((response) => {
          setNotes(notes.map((n) => (n._id === note._id ? response.data : n)));
          setNoteToEdit(null);
        })
        .catch((error) => console.error("Error updating note:", error));
    } else {
      handleAddNote(note);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <SearchBar onSearch={setSearchQuery} />
      <NoteForm noteToEdit={noteToEdit} onSave={handleSaveNote} />
      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />
    </div>
  );
};

export default App;
