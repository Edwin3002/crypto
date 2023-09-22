import { Box, Button, Card, Modal, Stack } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect, useRef } from "react";
import Swal from "sweetalert2/dist/sweetalert2";
import { tokenJwt } from "../../helpers/constans";
import { httpHelper } from "../../helpers/http.helper";
import RenderInputs from "../inputs/RenderInputs";
import { H2, Paragraph } from "../Typography";

const ModalSellForm = ({
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

  const { values, errors, resetForm } = useFormikContext();

  const price = useRef(5)

  const onApprove = async () => {
    const res = await httpHelper.put("http://localhost:9051/transaction/wallet/cashouts", {
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
  }

  const notifyApprove = () => Swal.fire({
    title: '¡El retiro ha sido procesado!',
    text: 'El dinero retirado se verá reflejado en tu cuenta de 2 a 3 días',
    icon: 'success',
    confirmButtonText: 'Entendido',
    confirmButtonColor: "#2E7D32",
    timer: 3500,
  });

  const notifyCancel = () => Swal.fire({
    title: '¡El retiro ha sido denegado!',
    text: 'Intenta nuevamente',
    icon: 'error',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#bc544b',
    timer: 2000,
  });

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
            <Button variant="contained" disabled={!Number(price.current) || errors.amount} onClick={onApprove}>
              Retirar
            </Button>
          </Box>
        </Stack>
      </Card>
    </Modal>
  );
};

export default ModalSellForm;