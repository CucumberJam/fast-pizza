import {memo} from "react";

function StatusOrder({priority, status}){
    return (
        <div className='m-auto space-x-2 flex flex-col items-center gap-2
        sm:flex-row'>
            {priority && (
                <span className='bg-red-400 rounded-full font-semibold
                                px-3 py-1 text-sm uppercase text-red-50
                                tracking-wide'>
                Priority
              </span>)}

            <span className='bg-green-400 rounded-full font-semibold
                             text-center px-2 py-1 text-sm uppercase text-green-50
                                tracking-wide'>
            {status} order
          </span>

        </div>
    );
}
export default memo(StatusOrder);