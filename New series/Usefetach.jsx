import React, { useEffect, useState } from 'react'

const Usefetach = (API_URL) => {
    const [post,setPost]=useState([])
    const [error,setError]=useState({})
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        const getData=async()=>{
            try {
                setLoading(true)
                const responce=await axios.get(API_URL)
                setPost(responce.data)
            } catch (error) {
                setError(error.responce)
            }finally{
                setLoading(false)
            }
        }
        getData()
    },[])
  return {post,error,loading}
}

export default Usefetach