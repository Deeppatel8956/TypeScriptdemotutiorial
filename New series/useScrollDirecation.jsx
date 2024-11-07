import React, { useEffect, useRef, useState } from 'react'

const useScrollDirecation = () => {
    const prescroll=useRef()
    const [scrollDirecation,setScrollDirecation]=useState("")

    useEffect(()=>{
        window.addEventListener('scroll',handelscroll)

        return ()=>{
            window.removeEventListener('scroll',handelscroll)
        }
    },[])

    const handelscroll=()=>{
        prescroll.current > window.scrollY
        ?setScrollDirecation("Up")
        :setScrollDirecation("Down")

        prescroll.current=window.screenY
    }
  return scrollDirecation
}

export default useScrollDirecation