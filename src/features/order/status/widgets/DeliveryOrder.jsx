import {calcMinutesLeft, formatDate} from "../../../../utils/helpers.js";
import {memo} from "react";

function DeliveryOrder({estimatedDelivery}){

    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div className='flex items-center justify-between flex-wrap gap-2
                      bg-stone-200 px-6 py-5'>
            <p className='font-medium'>
                {deliveryIn >= 0
                    ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                    : "Order should have arrived"}
            </p>
            <p className='font-xs text-stone-500'>
                (Estimated delivery: {formatDate(estimatedDelivery)})
            </p>
        </div>
    );
}
export default memo(DeliveryOrder);