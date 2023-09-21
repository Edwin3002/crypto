import FlexBox from "./componentes/FlexBox";
import Login from "./pages/Login";
import { ProviderPaypal } from "./paypal/ProviderPaypal";

function App() {
  return (
    <FlexBox>
    <ProviderPaypal/>
      <Login/>
    </FlexBox>
  );
}

export default App;
