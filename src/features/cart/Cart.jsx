import LinkButton from "../../ui/buttons/LinkButton.jsx";
import Button from "../../ui/buttons/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import CartHeader from "../../ui/header/CartHeader.jsx";
import {clearCart, getCart} from "./cartSlice.js";
import {useNavigate} from "react-router-dom";
import EmptyCart from "./EmptyCart.jsx";
import CartList from "./CartList.jsx";

function Cart() {
    const {name} = useSelector((store) => store.user.name);
    const cart = useSelector(getCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    if(cart.length === 0) return <EmptyCart/>

    return (
        <div className='py-3'>
            <LinkButton to="/menu">Back to menu</LinkButton>
            <CartHeader userName={name}/>
            <CartList cart={cart}/>
            <div className='flex flex-col gap-5 sm:flex-row md:gap-3 mt-6 space-x-2'>
                <Button onClick={()=> navigate('/order/new')}
                        to='/order/new'>
                    Order pizzas
                </Button>
                <Button onClick={() => dispatch(clearCart())}
                        type='secondary'>
                    Clear cart
                </Button>
          </div>
        </div>
    );
}

export default Cart;
