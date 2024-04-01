import {formatCurrency} from "../../utils/helpers.js";
import Button from "../../ui/buttons/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addItem, getQuantityById} from '../cart/cartSlice.js'
import DeleteCartItem from "../cart/DeleteCartItem.jsx";
import UpdateItemQuantity from "../cart/UpdateItemQuantity.jsx";
import {useState} from "react";
function MenuItem({ pizza }) {
  const {id, name, unitPrice, ingredients, soldOut} = pizza;
  /*const cart = useSelector(store => store.cart.cart);*/
  const dispatch = useDispatch();

  const currQuantity = useSelector(getQuantityById(id));
  const isInCart = currQuantity > 0;

  function handleAddToCart(){
      const newItem =  {
          pizzaId: id,
          name,
          quantity: 1,
          unitPrice,
          size: 25,
          sizePrice: unitPrice,
          totalPrice: unitPrice * 1
      }
      dispatch(addItem(newItem));
/*      const found = cart.find(item => item.pizzaId === id);

      if(!found){
          const newItem =  {
              pizzaId: id,
              name,
              quantity: 1,
              unitPrice,
              totalPrice: unitPrice * 1
          }
          dispatch(addItem(newItem));
      } else{
          dispatch(increaseItemQuantity(id));
      }*/
  }

  return (
    <li className='min-w-[279px] mt-2 w-full flex gap-2 py-2 bg-white rounded-lg hover:brightness-90'>
      <img className={`h-44 w-44 object-cover
      ${soldOut ? 'grayscale opacity-70' : ``}`}
          src={`images/${id}.jpg`} alt={name} />
      <div className='flex flex-col grow pt-0.5'>
        <p className='font-bold'>
            {name}
        </p>
        <p className='font-sm italic text-stone-500 capitalize'>
            {ingredients.join(', ')}
        </p>
        <div className='self-start mt-auto flex flex-col gap-5 justify-between
                        sm:flex-row
                        md:flex-col md:items-left
                        lg:flex-row'>
          {!soldOut ? <p className='text-sm'>
                        from {formatCurrency(unitPrice)}
                      </p>
              : <p className='text-sm uppercase font-medium
                        text-stone-500'>
                  Sold out
              </p>}

            {isInCart && (
                <div className='flex flex-col
                items-center gap-2 md:gap-5
                sm:flex-row md:flex-col lg:flex-row'>
                    <UpdateItemQuantity id={id} currentQuantity={currQuantity}/>
                    <DeleteCartItem id={id}/>
                </div>
            )}

            {!soldOut && !isInCart && (
                <Button onClick={handleAddToCart} type='small'>
                    Add to cart
                </Button>)
            }

        </div>
      </div>
    </li>
  );
}

export default MenuItem;
