import {memo} from "react";
import {formatCurrency} from "../../../../utils/helpers.js";

function PriceOrder({orderPrice, priority, priorityPrice}){
    return (
        <div  className='bg-stone-200 space-y-2 px-6 py-5'>
            <p className='text-sm font-medium text-stone-600'>
                Price pizza: {formatCurrency(orderPrice)}
            </p>
            {priority && (
                <p className='text-sm font-medium text-stone-600'>
                    Price priority: {formatCurrency(priorityPrice)}
                </p>)}
            <p className='font-bold'>
                To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
            </p>
        </div>
    );
}
export default memo(PriceOrder);