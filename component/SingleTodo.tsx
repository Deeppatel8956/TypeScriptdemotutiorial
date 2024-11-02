import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model/model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const SingleTodo:React.FC<
    {
        todo:Todo,
        todos:Todo[],
        setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    }
> = ({todo,todos,setTodos}) => {
 const [edit,setEdit]=useState<boolean>(false)
 const [edittodo,setEdittodo]=useState<string>("")

 const handeldelete=(id:number)=>{
  setTodos(todos.filter((todo)=>todo.id!==id))
 }

 const handeldone=(id:number)=>{
  setTodos(todos.map((todo)=>
    todo.id==-id?{...todo,isDone :!todo.isDone}:todo
))
 }

 const handeledit=(e:React.FormEvent,id:number)=>{
  e.preventDefault();
  setTodos(todos.map((todo)=>
    todo.id===id?{...todo,todo:edittodo}:todo
))
setEdit(false)
 }

 const inptref=useRef<HTMLInputElement>(null)

 useEffect(()=>{
  inptref.current?.focus();
 },[edit])
  return (
    <div><form action=" " onSubmit={((e)=>handeledit(e,todo.id))}>
      {edit?
      (<input type='text' value={edittodo} ref={inptref} onChange={(e)=>setEdittodo(e.target.value)}/>)
      :todo.isDone?(
        <s>{todo.todo}</s>
      ):(
        <span>{todo.todo}</span>
      )}
      <span
      onClick={(()=>{
        if (!edit&&!todo.isDone) {
          setEdit(!edit)
        }
      })}>
        <AiFillEdit />
      </span>
      <span className="icon" onClick={() => handeldelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handeldone(todo.id)}>
          <MdDone />
        </span>
      </form>
      </div>
  )
}

export default SingleTodo