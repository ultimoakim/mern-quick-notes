import * as usersService from '../../utilities/users-service';
import { checkToken } from "../../utilities/users-service";
import NoteCard from "../../components/NoteCard/NoteCard";
import { useState } from "react";

export default function MyNotesPage({ notes, setNotes, addNote }) {
    const noteCards = notes.map((n, idx) => <NoteCard note={n} key={idx} />);
    const [noteInfo, setNoteInfo] = useState({
        text: '',
    });

    function handleChange(evt) {
        setNoteInfo({ text: evt.target.value })
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addNote(noteInfo);
        // setNotes(...notes, note);
    }

    return (
        <>
            {notes.length ?
                <>
                    <h1>My Notes Page</h1>
                    <ul>{noteCards}</ul>
                    <label>Add Note!</label>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="New Note"
                            value={noteInfo.text}
                            name="text"
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Add Note</button>
                    </form>
                </>
                :
                <>
                    <h1>My Notes Page</h1>
                    <h3>No notes yet!</h3>
                    <label>Add Note!</label>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="New Note"
                            value={noteInfo.text}
                            name="text"
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Add Note</button>
                    </form>
                </>
            }
        </>
    );
}

