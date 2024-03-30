import Button from "../../ui/buttons/Button.jsx";
import {useDispatch} from "react-redux";
import {increaseItemQuantity, decreaseItemQuantity} from '../cart/cartSlice.js';

export default function UpdateItemQuantity({id, currentQuantity}){
    const dispatch = useDispatch();


    return (
        <div className='flex gap-3 items-center mx-2'>
            <Button type='round'
                    onClick={()=> dispatch(decreaseItemQuantity(id))}>
                -
            </Button>

            <span className='text-sm text-stone-500'>
                {currentQuantity}
            </span>

            <Button type='round'
                    onClick={()=> dispatch(increaseItemQuantity(id))}>
                +
            </Button>
        </div>
    );
}