import { PayPalButtons, PayPalScriptProvider, } from "@paypal/react-paypal-js"
import { useRef, useState } from "react";
export const ProviderPaypal = () => {

  const clientId = "AfS0k19QsFkzf09C2YuPPda74VRTmsLRN28UcnCnlVCb-K5DQLbpSSOPh43KR4TVIwmBJXjO_CKDIyB7"
  const [price, setPrice] = useState(5);
  const pri = useRef(5);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: pri.current
          }
        }
      ]
    });
  };

  const onApprove = async (data, actions) => {
    const res = await actions.order.capture()
    console.log(
      res
    );
    return actions.order.capture();
  };
  return (
    <div>
      <input
        type="number"
        min="10"
        // onChange={(e) => setPrice(e.target.value)}
        onChange={(e) => { setPrice(parseInt(e.target.value)); pri.current = parseInt(e.target.value) }}
        value={price}
        style={{ margin: 20 }}
      />
      <PayPalScriptProvider options={{
        clientId
      }}>
        <PayPalButtons style={{ color: "blue", layout: "horizontal" }}
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
          onCancel={(msg) => { console.log(msg) }
            // createOrder={() => { }}
            // onApprove={() => { }}
            // onCancel={() => { }
          }
        />
      </PayPalScriptProvider>
      useState {price}
    </div>
  )
}
