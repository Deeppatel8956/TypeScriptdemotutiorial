// import React, { forwardRef, useImperativeHandle, useRef } from 'react'

// const Custom = forwardRef((ref) => {
//     const inputref=useRef()
//     useImperativeHandle(ref,()=>({
    
//             focus : ()=>{
//                 inputref.current.focus();
//             },

//             clear: ()=>{
//               inputref.current.value=" ";
//             }
        
//     }))
//   return (
//     <div>

//         <input type="text" ref={inputref} />
//     </div>
//   )
// }
// )

// export default Custom

import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Custom =forwardRef ((ref) => {

  const inputref=useRef()

  useImperativeHandle(ref,()=>({
    focus:()=>{
      inputref.current.focus();
    },
    clear : ()=>{
     inputref.current.value=""
    }
  }))
  return (
    <div><input type="text" ref={inputref} /></div>
  )
})

export default Custom


// data pass app js
// const App=()=>{
//   const inputref=useRef()
//   const handelfocus=()=>{
//     inputref.current.focus()
//   }
//   const handelclear=()=>{
//     inputref.current.clear()
//   }
//   return (
//     <>
//     <Custom ref={inputref}/>
//     <button onClick={handelfocus}>focus</button>
//     <button onClick={handelclear}>clear</button>
//     </>
//   )
// }