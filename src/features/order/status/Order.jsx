import {getOrder} from "../../../services/apiRestaurant.js";
import {useFetcher, useLoaderData} from "react-router-dom";
import NumberOrder from "./widgets/NumberOrder.jsx";
import StatusOrder from "./widgets/StatusOrder.jsx";
import DeliveryOrder from "./widgets/DeliveryOrder.jsx";
import ItemsOrder from "./widgets/ItemsOrder.jsx";
import PriceOrder from "./widgets/PriceOrder.jsx";
import {useEffect} from "react";
import OrderItem from "../OrderItem.jsx";
import UpdateOrder from "./widgets/UpdateOrder.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchMenu} from "../../menu/menuSlice.js";

function Order() {
  const order = useLoaderData();

/*  const fetcher = useFetcher();

  useEffect(()=> {
    if(!fetcher.data && fetcher.state === 'idle' ) fetcher.load('/menu')
  }, [fetcher]);*/

  const dispatch = useDispatch();
  const {pizzas: menu, status: statusMenu} = useSelector(store => store.menu);

  useEffect(()=> {
    if(menu.length === 0) dispatch(fetchMenu());
  }, []);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  return (
    <div className='py-6 px-4 space-y-8'>

      <div className='flex items-center justify-between flex-wrap gap-2'>
        <NumberOrder id={id}/>
        <StatusOrder status={status} priority={priority}/>
      </div>

      <DeliveryOrder estimatedDelivery={estimatedDelivery} />
        <ItemsOrder>
            {cart.map(pizza => <OrderItem key={pizza.pizzaId}
                                          item={pizza}
                                          isLoadingIngredients={statusMenu === 'loading'}
                                          ingredients={menu?.find(el =>
                                              el.id === pizza.pizzaId)?.ingredients}
            />)}
        </ItemsOrder>
      <PriceOrder priorityPrice={priorityPrice} priority={priority} orderPrice={orderPrice}/>
      {!priority && <UpdateOrder order={order}/>}
    </div>
  );
}
export async function loader({params}){
  return await getOrder(params.id);
}

export default Order;
