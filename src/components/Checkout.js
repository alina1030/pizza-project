import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Success from "../components/Success";
import Loading from '../components/Loading';
import Error from "../components/Error";
export default function Checkout({subtotal}) {

    const orderstate = useSelector((state)=>state.placeOrderReducer)
    const {loading,error,success} = orderstate
    const dispatch = useDispatch()
    function tokenHander(token){
        console.log(token);
        dispatch(placeOrder(token, subtotal))
    }
  return (
    <div>
      {loading && (<Loading/>)}
      {error && (<Error error='Something went wrong'/>)}
      {success && (<Success success="Your order placed successfully"/>)}
        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51Khx4YSHx55RTpknWUxaJgUTPOEBC3EppmYyfm4WATSzWsAcQnAFgDcMCsPBJl2zMEK9rwC89uNNnmZOvJxvolaC00Td3REhlL'
        currency='INR'
        
        >
            <button className='btn'>CHECK OUT</button>

        </StripeCheckout>
    </div>
  )
}
