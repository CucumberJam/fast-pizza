import {formatCurrency} from "../../utils/helpers.js";

function OrderItem({ item,  isLoadingIngredients = false, ingredients = null }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className='py-3 space-y-1'>
      <div className='flex items-center justify-between
                    gap-4 text-sm flex-wrap'>

        <p className='flex gap-2'>
          <span className='font-bold'>
              {quantity} &times;
          </span>
          <span>
            {name}
          </span>
        </p>

        <p className='italic text-sm capitalize text-stone-500'>
          {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
        </p>

        <p className='font-bold'>
            {formatCurrency(totalPrice)}
        </p>

      </div>
    </li>
  );
}

export default OrderItem;
