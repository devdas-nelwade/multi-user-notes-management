import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NoteForm = () => {
  const [note, setNote] = useState({ title: '', content: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      const existing = savedNotes.find(n => n.id === id);
      if (existing) setNote(existing);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    if (id) {
      const updatedNotes = savedNotes.map(n => n.id === id ? { ...note, id } : n);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    } else {
      const newNote = { ...note, id: Date.now().toString() };
      savedNotes.push(newNote);
      localStorage.setItem('notes', JSON.stringify(savedNotes));
    }
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit Note' : 'New Note'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Content" rows="4" />
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default NoteForm;
