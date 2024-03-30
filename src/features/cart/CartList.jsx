import {memo} from "react";
import CartItem from "./CartItem.jsx";

function CartList({cart, inOrder = false}){
    return (
        <ul className='divide-y divide-stone-200 border-b mt-3'>
            {cart.map(item =>
                <CartItem key={item.pizzaId}
                          item={item} inOrder={inOrder}/>)}
        </ul>
    );
}
export default memo(CartList);