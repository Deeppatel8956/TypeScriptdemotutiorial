import React, { useEffect, useState } from 'react'

const Nasaimg = () => {
     const [img,setImg]=useState([])

    useEffect(()=>{
        const getData=async()=>{
            try {
                const responce=await fetch("https://images-api.nasa.gov/search?q=moon")
            const data=await responce.json()

            const imgurl=data.collection.items.flatmap((item)=>item.links?.
            item.filter((link)=>link.render=="image")
            .map((link)=>link.ref)
            )
            setImg(imgurl)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])
  return (
    <div>{img.map((im,i)=>{
        return <img src={im} alt="img not displayed" key={i} />
    })}</div>
  )
}

export default Nasaimg

