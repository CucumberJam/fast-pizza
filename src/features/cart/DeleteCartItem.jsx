import Button from "../../ui/buttons/Button.jsx";
import {removeItem} from "./cartSlice.js";
import {useDispatch} from "react-redux";

export default function DeleteCartItem({id}){
    const dispatch = useDispatch();
/*    const cart = useSelector(getCart);

    function handleRemoveItemFromCart(){
        const found = cart.find(item => item.pizzaId === id);

        if(found.quantity > 1){
            dispatch(decreaseItemQuantity(id));
        }else{
            dispatch(removeItem(id));
        }
    }*/

    return (
        <Button onClick={() => dispatch(removeItem(id))} type='small'>
            Delete
        </Button>
    );
}