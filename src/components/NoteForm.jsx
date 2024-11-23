import { useState, useEffect } from "react";
import axios from "axios";

const NoteForm = ({ noteToEdit, onSave }) => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    category: "Others",
  });

  useEffect(() => {
    if (noteToEdit) {
      setNote({
        title: noteToEdit.title,
        description: noteToEdit.description,
        category: noteToEdit.category,
      });
    }
  }, [noteToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(note);
    setNote({ title: "", description: "", category: "Others" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto my-4 p-4 bg-white shadow-md rounded"
    >
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Note Title"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        required
      />
      <textarea
        name="description"
        value={note.description}
        onChange={handleChange}
        placeholder="Note Description"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        required
      />
      <select
        name="category"
        value={note.category}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        {noteToEdit ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
