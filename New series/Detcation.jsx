import React from 'react'
import useScrollDirecation from './useScrollDirecation'
const Detcation = () => {
    const scrollDetacation=useScrollDirecation()
  return (
    <div>
        <h1>scroll : {scrollDetacation}</h1>
    </div>
  )
}

export default Detcation