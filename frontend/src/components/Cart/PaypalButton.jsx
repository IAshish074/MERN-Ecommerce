import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = ({ amount, onSuccess, onError }) => {
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  console.log("PayPal Client ID:", clientId);

  if (!clientId) {
    return (
      <div style={{ color: "red", padding: "1rem" }}>
        PayPal client ID is missing. Please check your environment
        configuration.
        <br />
        Payment cannot be processed at this time.
      </div>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": clientId,
        // currency: "USD",
        // intent: "CAPTURE",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toFixed(2),
                  currency_code: "USD",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          console.log("Payment approved, capturing...");
          return actions.order.capture().then((details) => {
            console.log("Payment captured successfully:", details);
            onSuccess(details);
          });
        }}
        onError={(err) => {
          console.error("PayPal Payment Error:", err);
          onError(err);
        }}
        onCancel={() => {
          console.log("Payment cancelled by user");
          onError({ message: "Payment was cancelled" });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
