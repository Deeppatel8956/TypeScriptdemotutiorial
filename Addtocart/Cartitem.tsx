import React from 'react'
import { CartItemType } from '../App';
import Cart from './Cart';

type Props  {
    cartItems: CartItemType[];
    addtocart: (clickedItem: CartItemType) => void;
    removeitem: (id: number) => void;
  };
  
const Cartitem:React.FC<Props> = ({removeitem,addtocart,cartItems}) => {
const Calculate=(item:CartItemType[])=>{
    item.reduce((ack:number,ite)=>ack+ite.amount*ite.price,0)
}
  return (
    <div>
        {cartItems.length==0?<p>loading</p>:<h1>not</h1>}
       <div>
       {cartItems.map((item)=>
          <Cart 
          addtocart={addtocart}
          removeitem={removeitem}
          item={item}
          key={item.id}/>
    )} 
       </div> 
    </div>
  )
}

export default Cartitem