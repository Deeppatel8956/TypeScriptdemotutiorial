import React, { useRef } from 'react'

interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handeladd: (e: React.FormEvent) => void

}
const Inputfiled:React.FC<Props> = ({todo,setTodo,handeladd}) => {

    const inref=useRef<HTMLInputElement>(null)
  return (
    <div>
        <form action=""
        onSubmit={((e)=>{
            handeladd(e);
            inref.current?.blur();
        })}>

            <input type="text"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            ref={inref} />
            <button>Go</button>
        </form>
    </div>
  )
}

export default Inputfiled

