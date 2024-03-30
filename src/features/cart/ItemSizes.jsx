import {memo} from "react";
import Button from "../../ui/buttons/Button.jsx";


function ItemSizes({size, sizes, onSetSize}){

    return (
        <div className='flex items-center justify-between gap-3'>
            <p>Size (sm) :</p>
            <div className='flex items-center justify-between gap-2'>
                {sizes.map((el, index) => {
                    return (
                        <div key={index} className={`rounded-lg ${el === size ? 
                                        `border-[3px] border-green-300`: ''}`}>
                            <Button type='small'
                                    value={el}
                                    onClick={() => onSetSize(index)}>
                                {el}
                            </Button>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}
export default memo(ItemSizes);