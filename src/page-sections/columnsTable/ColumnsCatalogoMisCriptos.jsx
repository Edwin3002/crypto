import { Box } from "@mui/material";
import ChipButtom from "../../componentes/ChipButtom";
import FlexBox from "../../componentes/FlexBox";

export const columnsCatalogoMisCriptos = [
  {
    Header: "Nombre",
    accessor: "nombre",
    Cell: ({ row }) => {
      return (
        <FlexBox alignItems="center" flexDirection="row">
          <img src={row.original.image} alt="icono moneda" width={40}/>
          <Box ml={2}>
            <p>{row.original.nombre}</p>
          </Box>
        </FlexBox>
      );
    },
  },
  {
    Header: "Precio Moneda",
    accessor: "precioMoneda",
  },
  {
    Header: "Fracción",
    accessor: "fraccion"
  },
  {
    Header: "Valor",
    accessor: "valor"
  },
  {
    Header: "Acción",
    Cell: ({ row }) => (<ChipButtom title="Verder" />)

  }
]