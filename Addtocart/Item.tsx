import React from 'react'

interface Props{
    item:CartItemType,
    handelcart:(clickedItem:CartItemType)=>void,
}
const Item:React.FC<Props> = ({item,handelcart}) => {
  return (
    <div>
         <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
        <button onClick={(()=>handelcart(item))}>Sunbmit</button>
    </div>
  )
}

export default Item