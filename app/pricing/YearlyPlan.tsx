import { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
const ButtonWrapper = ({ type }) => {
  const [{ options }, dispatch] = usePayPalScriptReducer();
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        intent: "subscription",
      },
    });
  }, [type]);
  return (<PayPalButtons
    createSubscription={(data, actions) => {
      return actions.subscription
        .create({
          plan_id: process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID,
        })
        .then((orderId) => {
          return orderId;
        });
    }}
    style={{
      label: "subscribe",
    }}
  />);
}
export default function YearlyPlan() {
  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, components: "buttons", intent: "subscription", vault: true }}>
      <ButtonWrapper type="subscription" />
    </PayPalScriptProvider>
  );
}