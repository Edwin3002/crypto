import { Box, Button, Card, Modal, Stack } from "@mui/material";
import { useRef } from "react";
import RenderInputs from "../inputs/RenderInputs";
import { H2, Paragraph } from "../Typography";

const ModalSellForm = ({
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

  const price = useRef(5)

  return (
    <Modal onClose={handleCloseModal} open={openModal} sx={{ display: "flex" }}>
      <Card sx={{ py: "30px", px: "32px", m: "auto" }}>
        <Stack rowGap={2}>
          <H2>{title}</H2>
          {Icon}

          <Paragraph sx={{ textAlign: "center" }}>{subtitle}</Paragraph>
          <Box>
            <RenderInputs data={dataForm} lectura={lectura} />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={handleCloseModal}>
              {cancelButtonText}
            </Button>
            <Button variant="contained" onClick={()=>{}}>
              Retirar
            </Button>
          </Box>
        </Stack>
      </Card>
    </Modal>
  );
};

export default ModalSellForm;