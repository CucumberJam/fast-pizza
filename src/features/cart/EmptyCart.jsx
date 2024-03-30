import LinkButton from "../../ui/buttons/LinkButton.jsx";

function EmptyCart() {
  return (
    <div className='py-3 px-4'>
        <LinkButton to='/menu'>Back to menu</LinkButton>
        <p className='text-center text-lg mt-7'>Your cart is still empty. <br/>
            <span className='font-medium'>Start adding some pizzas 🍕</span>
        </p>
    </div>
  );
}

export default EmptyCart;
