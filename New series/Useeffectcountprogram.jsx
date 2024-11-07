import React, { useEffect, useRef, useState } from 'react'

const Useeffectcountprogram = () => {
    const [count,setCount]=useState(0)
    const currentref=useRef(false)
    useEffect(()=>{
      if (!currentref.current) {
        currentref.current=true
        setCount(count+1)
      }
    })
  return (
    <div>{count}</div>
  )
}

export default Useeffectcountprogram