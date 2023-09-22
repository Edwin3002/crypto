import { Box } from "@mui/material";
import FlexBox from "../../componentes/FlexBox";

export const columnsTransacciones = [
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
    Header: "Fracción",
    accessor: "fraccion"
  },
  {
    Header: "Valor",
    accessor: "valor"
  },
  {
    Header: "Estado",
    accessor: "estado"
  }
]