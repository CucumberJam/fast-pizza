import {memo} from "react";

function CartHeader({userName}){

    return (
        <h2 className='mt-7 text-xl font-semibold'>
            Your cart {userName} 🛒
        </h2>
    );
}
export default memo(CartHeader)