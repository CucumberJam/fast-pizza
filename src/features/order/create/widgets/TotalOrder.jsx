import {memo} from "react";
import {formatCurrency} from "../../../../utils/helpers.js";

function TotalOrder({hasPriority, priorityPrice, totalPrice}){

    return (
        <div className='text-lg my-10 flex flex-col
        sm:flex-row sm:items-center'>
            <div>
                Total Price:
                <span className='font-medium text-lg'> {formatCurrency(totalPrice)} </span>
            </div>
            {hasPriority && (
                <p className='text-sm italic text-stone-500'> (with € {priorityPrice} for priority)</p>
            )}
        </div>
    );
}

export default memo(TotalOrder);