import {formatCurrency} from "../../utils/helpers.js";
import DeleteCartItem from "./DeleteCartItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";
import {useState} from "react";
import ItemSizes from "./ItemSizes.jsx";
import {useDispatch} from "react-redux";
import {updateSizePrice} from "./cartSlice.js";

function CartItem({ item, inOrder = false }) {
  const {pizzaId, name, quantity, size, totalPrice } = item;
  const [pizzaSize, setPizzaSize] = useState(0);
  const sizes = [25, 35, 45];
  const sizeToPrice = {0: 1, 1: 1.25, 2: 1.5}

  const dispatch = useDispatch();

  function handleSize(index){
      setPizzaSize(sizes[index]);

      dispatch(updateSizePrice({
          id: pizzaId,
          size: sizes[index],
          addPrice: sizeToPrice[index]
      }));
  }

  return (
    <li className='py-3 flex flex-col
                    md:flex-row md:items-center md:justify-between'>

        <p className='mb-2 sm:mb-0 font-medium flex-nowrap'>
          {name}
      </p>

      <div className='flex flex-col gap-3 justify-between items-start
                      sm:flex-row sm:gap-6 sm:items-center sm:justify-between'>

          {!inOrder ? (
              <ItemSizes size={pizzaSize}
                         sizes={sizes}
                         onSetSize={handleSize}/>
          ) : (
              <div>
                  <p>Size: {size}(sm.)</p>
              </div>
          )}

          <p className='font-bold'>
              {formatCurrency(totalPrice)}
          </p>

          <div className='self-end flex items-center
                        justify-between gap-5'>

              {!inOrder ? (
                  <UpdateItemQuantity id={pizzaId}
                                      currentQuantity={quantity}/>
              ) : (
                  <span className='text-sm text-stone-500'>
                        quantity: {quantity}
                  </span>
              )}
              <DeleteCartItem id={pizzaId}/>
          </div>

      </div>
    </li>
  );
}

export default CartItem;
