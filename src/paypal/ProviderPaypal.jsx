import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

export const ProviderPaypal = () => {

  const clientId = "AfS0k19QsFkzf09C2YuPPda74VRTmsLRN28UcnCnlVCb-K5DQLbpSSOPh43KR4TVIwmBJXjO_CKDIyB7"

  return (
    <div>
      <PayPalScriptProvider options={{
        clientId
      }}>
        <PayPalButtons style={{ color: "blue", layout: "horizontal", label: "pay" }}
          createOrder={() =>{}}
          onApprove={() =>{}}
          onCancel={() =>{}}
        />
      </PayPalScriptProvider>
    </div>
  )
}
