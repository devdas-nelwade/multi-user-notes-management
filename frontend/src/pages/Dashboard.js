import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Dashboard.css'; // Make sure this file exists

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const handleDelete = (id) => {
    const updated = notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updated));
    setNotes(updated);
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <h2>Your Notes</h2>
        <Link to="/note/new" className="new-note-btn">+ New Note</Link>
        <ul className="notes-list">
          {notes.map(note => (
            <li key={note.id} className="note-item">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="note-actions">
                <Link to={`/note/${note.id}`} className="edit-btn">Edit</Link>
                <button onClick={() => handleDelete(note.id)} className="delete-btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
