import {memo} from "react";

function NumberOrder({id}){
    return (
        <h2 className='text-xl font-semibold'>
            Order #{id} status
        </h2>
    );
}
export default memo(NumberOrder);