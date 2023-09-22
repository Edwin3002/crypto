import { Box } from "@mui/material";
import FlexBox from "../../componentes/FlexBox";
import ChipButtom from "../../componentes/ChipButtom";

export const columnsCriptos = [
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
    Header: "Precio",
    accessor: "precio",
  },
  {
    Header: "Cambio",
    accessor: "cambio",
  },
  {
    Header: "Volumen",
    accessor: "volumen",
  },
  {
    Header: "Cap. Mercado",
    accessor: "capMercado",
  },
  {
    Header: "Acción",
    Cell: ({ row }) => {
      return (
        <ChipButtom title="Ver detalle" />
      );
    }
  },
]