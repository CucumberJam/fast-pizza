import {memo} from "react";

function HiddenCartData({cart, priorityPrice, totalPrice}){
    return (
        <>
            <input type='hidden'
                   name='cart'
                   value={JSON.stringify(cart)}/>
            <input type='hidden'
                   name='priorityPrice'
                   value={priorityPrice}/>
            <input type='hidden'
                   name='totalPrice'
                   value={totalPrice}/>
        </>
    );
}
export default memo(HiddenCartData);