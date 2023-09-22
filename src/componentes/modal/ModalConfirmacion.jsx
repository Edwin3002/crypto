/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Button } from "@mui/material";
import FlexBox from "../FlexBox";
import { H1, H2, Paragraph } from "../Typography";
import toastModal from "./ModalToast";

const ModalConfirmacion = ({
  mensaje = "¿Estás seguro de realizar una orden de compra?",
  fraccion = "237",
  clave = "VYXZ090293AKSFSPÑEAZP12",
  controlModal
}) => {
  const alertaConfirmacion = () => {
    toastModal({
      titulo: "¡La compra ha sido procesada!",
      subtitulo: "Revisa el estado de tu compra en transacciones",
    });
    controlModal(false);
  };

  const cerrarModal = () => {
    controlModal(false);
  }

  return (
    <Box>
      <FlexBox flexDirection="column" gap={4}>
        <H1 textAlign="center">{mensaje}</H1>
        <FlexBox flexDirection="column" gap={1}>
          <H2 fontWeight={400} textAlign="center">
            {fraccion} Fracción = $212 USD
          </H2>
          {clave && (
            <FlexBox justifyContent="center" alignItems="center" gap={1}>
              <img src="src/assets/key.svg" alt="llave" />
              <Paragraph fontWeight={350}>{clave}</Paragraph>
            </FlexBox>
          )}
        </FlexBox>
        <FlexBox justifyContent="center" gap={2}>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              paddingY: "12px",
            }}
            onClick={cerrarModal}
          >
            Cancelar
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundcolor: "primary.main",
              paddingY: "12px",
            }}
            onClick={alertaConfirmacion}
          >
            Confirmar
          </Button>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};

export default ModalConfirmacion;
