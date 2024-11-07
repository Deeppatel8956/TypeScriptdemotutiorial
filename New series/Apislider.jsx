import React, { useState } from 'react'
import { useEffect } from 'react';
const API_URL = "https://jsonplaceholder.typicode.com/users";
const Apislider = () => {
    const [user,setUser]=useState([])
    const [size,setSize]=useState(2)
    const [cur,setCur]=useState(0)

    useEffect(()=>{
        const getData=async()=>{
           const responce= await axios.get(API_URL)
            setUser(responce.data)
            try {
                console.log(done)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])


    const setpre=()=>{
        if (cur > 0) {
            setCur((pre)=>pre -1)
        }
    }

    const setnext=()=>{
        if (cur < Math.ceil(user.length /size)-1) {
            setCur((pre)=>pre+1)
        }
    }

    const startindex=cur*size
    const endindex=size+startindex
  return (
    <div>{
        user.slice(startindex,endindex).map((ele,i)=>(
            <ul key={i}>
                <li>{ele}</li>
            </ul>
        ))
        
        }
        <button onClick={()=>setpre()}>PRE</button>
        <button onClick={()=>setnext()}>PRE</button>
        </div>
  )
}

export default Apislider