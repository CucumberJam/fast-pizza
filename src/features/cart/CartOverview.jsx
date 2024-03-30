import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalPrice, getTotalQuantity} from "./cartSlice.js";
function CartOverview() {
    const totalQuantity= useSelector(getTotalQuantity);
    const totalPrice = useSelector(getTotalPrice);


    return (
      <div className='h-[50px] md:text-base text-sm sm:px-6 px-4 py-4
                    bg-stone-700  text-stone-200 p-4
                    flex items-center justify-between
                    z-1 fixed bottom-0 left-0 right-0'>
          {totalQuantity > 0 &&
          <>
              <p className='text-stone-300 uppercase space-x-4'>
                  <span> {totalQuantity} pizza{totalQuantity > 1 ? `s`: ''}</span>
                  <span>$ {totalPrice}</span>
              </p>
              <Link to='/cart'>Open cart &rarr;</Link>
          </>
          }
      </div>
  );
}

export default CartOverview;
