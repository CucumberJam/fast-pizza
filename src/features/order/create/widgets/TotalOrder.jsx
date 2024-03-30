import {memo} from "react";
import {formatCurrency} from "../../../../utils/helpers.js";

function TotalOrder({hasPriority, priorityPrice, totalPrice}){

    return (
        <div className='text-lg my-10'>
            Total Price:
            <span className='font-medium text-lg'>
                {formatCurrency(totalPrice)}
            </span>
            {hasPriority && (
                <span className='text-sm italic text-stone-500'>
                 (with € {priorityPrice} for priority)
              </span>
            )}
        </div>
    );
}

export default memo(TotalOrder);