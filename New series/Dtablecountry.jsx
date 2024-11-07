import React from 'react'

const Dtablecountry = ({Dtable}) => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

    const countryes=Object.keys(Dtable.countries)

    const states=Object.keys(Dtable.states.filter((state)=>Dtable.states[state].country===selectedCountry))

    const cities=Object.keys(Dtable.cities).filter((citie)=>
      Dtable.cities[citie].country==selectedCountry&&
      Dtable.cities[citie].state==selectedState
    )

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
      };
    
      const handleStateChange = (e) => {
        setSelectedState(e.target.value);
      };
    
      const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
      };
  return (
    <div>
     <select name="" id="" value={selectedCountry} onClick={handleCountryChange}>
        <option value="" hidden>
            Selected counrty
        </option>
        {countryes.map((cuntry)=>(
            <option value={cuntry} key={cuntry}>
                {cuntry}
            </option>
        ))}
     </select>

     <select name="" id=""
     value={selectedState}
     disabled={!selectedCountry}
     onClick={handleStateChange}>

        <option value="" hidden>
            Selected states
        </option>
        {states.map((states)=>(
            <option value={states} key={states}>
                {states}
            </option>
        ))}

     </select>

     <select name="" id=""
     value={selectedCity}
     disabled={!selectedState}
     onClick={handleCityChange}>
        <option value="" hidden>
            Selected counrty
        </option>
        {cities.map((citie)=>(
            <option value={citie} key={citie}>
                {citie}
            </option>
        ))}
     </select>

    </div>
  )
}

export default Dtablecountry