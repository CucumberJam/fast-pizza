import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder, {action as createOrder} from "./features/order/create/CreateOrder.jsx";
import Order,  {loader as orderLoader} from "./features/order/status/Order.jsx";
import {action as updateOrder} from './features/order/status/widgets/UpdateOrder.jsx'
import Layout from "./ui/Layout.jsx";
import Error from "./ui/Error.jsx";


const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/menu',
        element: <Menu/>,
/*        loader: menuLoader,*/ // use AsyncThunk to fetch data once
        errorElement: <Error/>,
      },
      {
        path: '/cart',
        element: <Cart/>,
        errorElement: <Error/>,
      },
      {
        path: '/order/new',
        element: <CreateOrder/>,
        action: createOrder,
      },
      {
        path: '/order/:id',
        element: <Order/>,
        loader: orderLoader,
        action: updateOrder, // function from child component of Order
        errorElement: <Error/>,
      }
    ]
  },
]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
