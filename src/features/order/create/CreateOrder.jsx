import {Form, redirect, useActionData, useNavigation} from "react-router-dom";
import {createOrder} from "../../../services/apiRestaurant.js";
import Button from "../../../ui/buttons/Button.jsx";
import InputItem from "../../../ui/input/InputItem.jsx";
import InputCheck from "../../../ui/input/InputCheck.jsx";
import ErrorMessage from "../../../ui/error/ErrorMessage.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getObjEmail, isValidPhone} from "../../../utils/helpers.js";
import {clearCart, getCart, getTotalPrice} from "../../cart/cartSlice.js";
import EmptyCart from "../../cart/EmptyCart.jsx";
import store from '../../../store/store.js'
import {useState} from "react";
import {fetchAddress} from "../../user/userSlice.js";
import CurrentPosition from "./widgets/CurrentPosition.jsx";
import CartList from "../../cart/CartList.jsx";
import TotalOrder from "./widgets/TotalOrder.jsx";
import sendOrder from "../../../services/apiEmail.js";
import HiddenCartData from "./widgets/HiddenCartData.jsx";
import HiddenGeoPosition from "./widgets/HiddenGeoPosition.jsx";

function CreateOrder() {
  const {name: userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress} = useSelector(store => store.user);

  const cart = useSelector(getCart);
  const isLoadingAddress = addressStatus === 'loading';
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const dispatch = useDispatch();
  const formErrors = useActionData();
  const [withPriority, setWithPriority] = useState(false);
  const totalCartPrice = useSelector(getTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if(!cart.length) return <EmptyCart/>;

  function handleCurrentAddress(e){
    e.preventDefault();
    dispatch(fetchAddress());
  }

  return (
    <div className='px-4 py-6'>
      <h2 className='mb-8 text-xl font-semibold'>
        Ready to order? Let's go!
      </h2>

      <Form method="POST" action='/order/new'>
        <InputItem defaultName={userName}
                   labelName='First Name:'
                   inputName='customer'
                   inputType='text'>
            {formErrors?.customer && (
                <ErrorMessage>
                  {formErrors.customer}
                </ErrorMessage>)}
        </InputItem>

        <InputItem labelName='Phone number:'
                   inputName='phone'
                   inputType='tel'>

            {formErrors?.phone && (
                <ErrorMessage>
                  {formErrors.phone}
                </ErrorMessage>)}
        </InputItem>

        <InputItem labelName='Address:'
                   inputName='address'
                   inputType='text'
                   defaultName={address}
                   disabled={isLoadingAddress}>
            {(addressStatus === 'error') && (
                <ErrorMessage>
                  {errorAddress}
                </ErrorMessage>)}
        </InputItem>

        <CurrentPosition isLoading={isLoadingAddress}
                         onCurrAddress={handleCurrentAddress}/>

        <InputCheck value={withPriority}
                    onChangePriority={setWithPriority}
                    inputName='priority' 
                    idLabel='priority'
                    labelName='Want to yo give your order priority?'/>

        <CartList cart={cart} inOrder={true}/>

        <TotalOrder hasPriority={withPriority}
                    priorityPrice={priorityPrice}
                    totalPrice={totalPrice}/>

        {/*put cart-data & geolocation in hidden inputs:*/}
        <div className='mt-8'>
          <HiddenCartData cart={cart}
                          priorityPrice={priorityPrice}
                          totalPrice={totalPrice}/>

          {position.latitude && position.longitude && (
              <HiddenGeoPosition latitude={position.latitude}
                                  longitude={position.longitude}/>
          )}

          <Button disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting ? 'Preparing order...' : 'Order now'}
          </Button>

        </div>
      </Form>
    </div>
  );
}
export async function action({ request }){
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = {};
  if(!isValidPhone(data.phone)) errors.phone = 'Please give a correct phone number.'
  if(!data.customer) errors.customer = 'Please fill your name.'
  if(!data.address) errors.address = 'Please fill your address.'

  if(Object.keys(errors).length > 0) return errors;

  //send order to backend:
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  }
  const newOrder = await createOrder(order);

  //send order to email:
  await sendOrder(getObjEmail(order, newOrder));

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);

}
export default CreateOrder;
