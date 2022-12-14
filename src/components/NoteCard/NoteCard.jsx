import * as userService from '../../utilities/users-service';

export default function NoteCard({note}) {
    return(
        <li>
            <h3>{note.text}</h3>
        </li>
    );
}