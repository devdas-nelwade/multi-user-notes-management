import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NoteForm from './pages/NoteForm';
import { useAuth } from './context/AuthContext';
import './App.css';


const App = () => {
  const { user } = useAuth();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/note/new" element={user ? <NoteForm /> : <Navigate to="/login" />} />
        <Route path="/note/:id" element={user ? <NoteForm /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
