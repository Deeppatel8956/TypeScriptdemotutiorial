import React from 'react'
import { CartItemType } from '../App';
type Props  {
  Item: CartItemType[];
  addtocart: (clickedItem: CartItemType) => void;
  removeitem: (id: number) => void;
};
const Cart:React.FC<Props> = ({Item,addtocart,removeitem}) => {

  return (
    <div>

<h3>{item.title}</h3>
      <div className='information'>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <button onClick={(()=>removeitem(Item.id))}>Remove</button>

      <button onClick={(()=>addtocart(Item))}></button>
    </div>
  )
}

export default Cart