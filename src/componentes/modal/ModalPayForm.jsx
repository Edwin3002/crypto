import { Box, Button, Card, Modal, Stack } from "@mui/material";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useFormikContext } from "formik";
import { useRef } from "react";
import { useEffect } from "react";
import RenderInputs from "../inputs/RenderInputs";
import { H2, Paragraph } from "../Typography";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { httpHelper } from "../../helpers/http.helper";
import { tokenJwt } from "../../helpers/constans";
// import { tokenJwt } from "../../helpers/constans";

const ModalPayForm = ({
  action,
  openModal = false,
  handleCloseModal,
  title = "",
  Icon = null,
  okButtonText = "Si",
  cancelButtonText = "Cancelar",
  okButtonColor = "primary",
  isLoading = false,
  subtitle = "",
  dataForm,
  lectura,
  deshabilitarButton,
  children
}) => {

  const clientId = "AfS0k19QsFkzf09C2YuPPda74VRTmsLRN28UcnCnlVCb-K5DQLbpSSOPh43KR4TVIwmBJXjO_CKDIyB7"

  const { values, errors, resetForm } = useFormikContext();

  const price = useRef(5);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price.current
          }
        }
      ]
    });
  };

  const onApprove = async (data, actions) => {
    const res = await httpHelper.put("http://localhost:9051/transaction/wallet/recharge", {
      user: tokenJwt._id,
      value: price.current
    })
    handleCloseModal();
    resetForm();
    if (res.success) {
      notifyApprove();
      action();
    } else {
      notifyCancel();
    }
  };

  const notifyApprove = () => Swal.fire({
    title: '¡La compra ha sido procesada!',
    text: 'Revisa el estado de tu compra en transacciones',
    icon: 'success',
    confirmButtonText: 'Entendido',
    confirmButtonColor: "#2E7D32",
    timer: 3500,
  })

  const notifyCancel = () => Swal.fire({
    title: '¡La compra ha sido denegada!',
    text: 'Revisa el estado de tu compra en transacciones',
    icon: 'error',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#bc544b',
    timer: 2000,
  })

  useEffect(() => {
    price.current = values.amount
  }, [values]);

  return (
    <Modal onClose={handleCloseModal} open={openModal} sx={{ display: "flex" }}>
      <Card sx={{ py: "30px", px: "32px", m: "auto" }}>
        <Stack rowGap={2}>
          <H2 sx={{ textAlign: "center" }}>{title}</H2>
          {Icon}

          <Paragraph sx={{ textAlign: "center" }}>{subtitle}</Paragraph>
          <Box>
            <RenderInputs data={dataForm} lectura={lectura} />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={() => { handleCloseModal(); resetForm() }}>
              {cancelButtonText}
            </Button>
            {/* <Button variant="outlined" onClick={() => { console.log(price); }}>
              price
            </Button>
            <Button variant="outlined" onClick={() => { onApprove() }}>
              print
            </Button> */}
            <PayPalScriptProvider options={{
              clientId
            }}>
              <PayPalButtons disabled={!Number(price.current) || errors.amount} style={{ color: "blue", layout: "horizontal" }}
                createOrder={(data, actions) => createOrder(data, actions, values.amount)}
                onApprove={(data, actions) => onApprove(data, actions)}
                onCancel={(msg) => { console.log(msg); handleCloseModal(); resetForm(); notifyCancel(); }
                }
              />
            </PayPalScriptProvider>
          </Box>
        </Stack>
      </Card>
    </Modal>
  );
};

export default ModalPayForm;