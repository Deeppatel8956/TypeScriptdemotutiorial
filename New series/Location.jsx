import React from 'react'

const Location = ({Location}) => {
    const [locations, setLocations] = useState(Location);

    const moveUpwer=(index)=>{
        if (index==0) return 
        const newitems=[...Location]
        const tem=newitems[index]
        newitems[index]=newitems[index-1]
        newitems[index-1]=tem
        setLocations(newitems)
    }


    const moveDOWNwer=(index)=>{
        if (index==0) return 
        const newitems=[...Location]
        const tem=newitems[index]
        newitems[index]=newitems[index+1]
        newitems[index+1]=tem
        setLocations(newitems)
    }
  return (
    <div>
        {location.map((location,index)=>{
            return <>
            <p>{location}</p>
            {index !== location.length-1 && (
                <FaAngleDoubleDown onClick={() => moveUpwer(index)} />
            )}

            {index !== 0 && (
                <FaAngleDoubleUp onClick={() => moveDOWNwer(index)} />
            )}
            </>
        })}
    </div>
  )
}

export default Location