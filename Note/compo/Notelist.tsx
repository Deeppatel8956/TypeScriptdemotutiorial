import React from 'react';
import { Note } from '../modeles/Note';
import Notes from './Notes';
interface InNotes{
     notes: Note[],
     setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}
const Notelist:React.FC<InNotes>=({notes,setNotes})=> {
    const handeldelte=(id:string)=>{
        setNotes(notes.filter(note=>note.id!==id))
    }
  
    const raderNote=():JSX.Element[]=>{
        return notes.map(note=>{
            return <Notes key={note.id} note={note} handeldelte={handeldelte} />
        })
    }
    return (
        <div>
            <div>
                {raderNote()}
            </div>
        </div>
    );
}

export default Notelist;