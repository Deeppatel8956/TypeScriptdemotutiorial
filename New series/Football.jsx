import React, { useState } from 'react'
import { useEffect } from 'react'

const Football = () => {
    const [selected,setSelected]=useState(null)
    const [matches,setMatches]=useState([])

    useEffect(()=>{
        fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=${selected}`)
        .then((res)=>res.json())
        .then((responce)=>setMatches(responce.data))
    },[selected])

    const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
  return (
    <div>
        <ul>
            {years.map((yerar)=>{
                return <>
                       <li key={yerar} onClick={()=>setSelected(yerar)}>
                        {yerar}
                       </li>
                </>
            })}
        </ul>
        
        <div>
            {matches.length > 0 ?( 
                <>
                <ul>
                {matches?.map((match)=>(
                    <>
                    <li>
                    Match {match.name} won by {match.winner}
                    </li>
                    </>
                ))}
                </ul>
                </>
            ):(
                <>
                <div> Not match </div>
                </>
            )}

   
        </div>
    </div>
  )
}

export default Football