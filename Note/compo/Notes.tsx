import React from 'react';
import { Note } from '../modeles/Note';
interface INnotes{
     note: Note

     handeldelte: (id: string) => void
}
const Note:React.FC<INnotes>=({note,handeldelte})=> {
    return (
        <div>
            <div className="card">
  <h5 className="card-header">{note.title}</h5>
  <div className="card-body">
    <h5 className="card-title">{note.text}</h5>
    <p className="card-text">{note.date}</p>
    <a href="#" className="btn btn-primary" onClick={()=>handeldelte(note.id)}>Go somewhere</a>
  </div>
</div>
        </div>
    );
}

export default Note;