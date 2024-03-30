import {memo} from "react";
function ItemsOrder({children}){
    return (
        <ul className='px-8 divide-y divide-stone-200 border-b'>
            {children}
        </ul>
    );
}
export default memo(ItemsOrder);