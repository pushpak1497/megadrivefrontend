const NoteList = ({ notes, onEdit, onDelete }) => {
  console.log(notes);
  return (
    <div className="space-y-4">
      {notes?.map((note) => (
        <div key={note._id} className="p-4 bg-white shadow-md rounded">
          <h3 className="font-bold">{note.title}</h3>
          <p>{note.description}</p>
          <p className="text-sm text-gray-600">Category: {note.category}</p>
          <div className="flex space-x-4 mt-2">
            <button onClick={() => onEdit(note)} className="text-blue-500">
              Edit
            </button>
            <button onClick={() => onDelete(note._id)} className="text-red-500">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
