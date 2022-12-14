import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from "../AuthPage/AuthPage";
import MyNotesPage from "../MyNotesPage/MyNotesPage";
import NavBar from "../../components/NavBar/NavBar";
import * as notesAPI from "../../utilities/notes-api";


export default function App() {
  // If there's no token, then this will be null.
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  async function addNote(data) {
    const note = await notesAPI.create(data);
    setNotes([...notes, note]);
  }

  return (
    <main className="App">
      {user  ?
        <>
          <NavBar user={user} setUser={setUser} />
          <MyNotesPage notes={notes} setNotes={setNotes} addNote={addNote} />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


