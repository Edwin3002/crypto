/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ChipButtom from "../../componentes/ChipButtom";
import FlexBox from "../../componentes/FlexBox";
import { H4, Paragraph } from "../../componentes/Typography";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import ModalConfirmacion from "../../componentes/modal/ModalConfirmacion";
import { Box } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "0.75rem",
  p: 4,
};

export default [
  {
    Header: "Nombre",
    accessor: "nombre",
    Cell: ({ row }) => {
      return (
        <FlexBox gap={1}>
          <img src={"src/assets/cuenta_icono.svg"} alt="icono cuenta" />
          <FlexBox flexDirection="column">
            <Paragraph fontSize={12}>{row.original.nombre}</Paragraph>
            <Paragraph fontSize={12} fontWeight={400}>
              {row.original.llavePublica}
            </Paragraph>
          </FlexBox>
        </FlexBox>
      );
    },
  },
  {
    Header: "Fraccion",
    accessor: "fraccion",
  },
  {
    Header: "Valor",
    accessor: "valor",
  },
  {
    Header: "Acción",
    Cell: ({ row }) => {
      const [abrirModal, setAbrirModal] = useState(false);
      const handleOpen = () => setAbrirModal(true);
      const handleClose = () => setAbrirModal(false);
      return (
        <>
          <ChipButtom notificacion={handleOpen}  title="Comprar" />
          <Modal open={abrirModal} onClose={handleClose}>
            <Box sx={style}>
              <ModalConfirmacion controlModal={setAbrirModal} />
            </Box>
          </Modal>
        </>
      );
    },
  },
];
