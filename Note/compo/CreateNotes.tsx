import React, { useRef, useState } from 'react';
import { Note } from '../modeles/Note';
interface INcreate{
    notes:Note[],
     setNotes: React.Dispatch<React.SetStateAction<Note[]>>

}
const  CreateNotes:React.FC<INcreate>=({notes,setNotes})=> {
    const [error,setError]=useState<string>("")
    const titleref=useRef<HTMLInputElement | null>(null)
    const textref=useRef<HTMLInputElement | null>(null)

    const handelsubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (titleref.current?.value=="" || textref.current?.value=="") {
            return setError("please write the input feld")
        }
        setError("")
        setNotes([...notes,{
            id:(new Date).toString(),
            date:(new Date).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
        }])
        (textRef.current as HTMLTextAreaElement).value="";
         (titleRef.current as HTMLInputElement).value=""
    }

    return (
        <div>
            {error &&<div className="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>}

<form onSubmit={(e)=>handelsubmit(e)}>
  
    
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" ref={titleref}/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} ref={textref}></textarea>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
}

export default CreateNotes;