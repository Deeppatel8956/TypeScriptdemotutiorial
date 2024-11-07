import React, { useState } from 'react'

const Dropdown = ({data}) => {
    const [items,setItems]=useState(data)
    const [text,setText]=useState("")

    // const filterlist=items.filter((item)=>{
    //     return (
    //         item.subjectName.toLowerCase().includes(text.toLowerCase)||
    //         item.desc.toLowerCase().includes(text.toLowerCase)||
    //         item.id.toLowerCase().includes(text.toLowerCase)
    //     )
        
    // }
    // text?setItems(filterlist):setItems(data)
    // )

    
  useEffect(() => {
    const filteredItem = items.filter((item) => {
      const lowerCaseText = text.toLowerCase();
      return (
        item.subjectName.toLowerCase().includes(lowerCaseText) ||
        item.id.toLowerCase().includes(lowerCaseText) ||
        item.desc.toLowerCase().includes(lowerCaseText)
      );
    });
    text ? setItems(filteredItem) : setItems(data);
  }, [text]);
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <ul>{
            
            filterlist.map((item,i)=>{
                return <>
                   <li>
                    <span>{item.subjectName}</span>
                    <br />
                    <span>{item.desc}</span>
                    <br />
                    <span>{item.id}</span>
                   </li>
                </>
            })}</ul>
    </div>
  )
}

export default Dropdown