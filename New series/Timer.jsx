import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(0)
    const [isrun,setIsrun]=useState('')

    const initalref=useRef()

    useEffect(()=>{
        if (isrun=='start') {
           initalref.current= setTimeout(() => {
                setTimer((pre)=>pre+1)
            }, 1000);
        }else if (isrun=="pause") {
            clearInterval(initalref.current)
        }else if(isrun=='stop'){
         setTimer(0)
         clearInterval(initalref.current)
        }
    },[])

    const start_Timer=()=>{
        initalref.current=setTimeout(() => {
            setTimer(timer+1)
        }, 1000);
    }

    const stop_Timer=()=>{
        setTimer(0)
        clearTimeout(initalref)
    }

    const pause_Timer=()=>{
        clearTimeout(initalref)
    }
  return (
    <>
    <h1>{timer}</h1>
    <button onClick={()=>setIsrun("start")}>START</button>
    <button onClick={()=>setIsrun("pause")}>PAUSE</button>
    <button onClick={()=>setIsrun("stop")}>STOP</button>
    </>
  )
}

export default Timer