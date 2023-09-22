import { Box } from "@mui/material";
import FlexBox from "../../componentes/FlexBox";

export const columnsCriptos = [
  {
    Header: "Nombre",
    accessor: "nombre",
    Cell: ({ row }) => {
      return (
        <FlexBox alignItems="center" flexDirection="row">
          <img src={row.original.image} alt="icono moneda" width={40} />
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
  }
]

export const columnsCriptosApi = [
  {
    Header: "Nombre",
    accessor: "name",
    Cell: ({ row }) => {
      return (
        <FlexBox alignItems="center" flexDirection="row">
          <img src={row.original.image} alt="icono moneda" width={40} />
          <Box ml={2}>
            <p>{row.original.name}</p>
          </Box>
        </FlexBox>
      );
    },
  },
  {
    Header: "Precio Actual",
    accessor: "current_price",
    Cell: ({ row }) => {
      return (
        <p>$ {row.original.current_price.toLocaleString()}</p>
      );
    },
  },
  {
    Header: "Precio max 24h",
    accessor: "high_24h",
    Cell: ({ row }) => {
      return (
        <p>$ {row.original.high_24h.toLocaleString()}</p>
      );
    },
  },
  {
    Header: "Precio min 24h",
    accessor: "low_24h",
    Cell: ({ row }) => {
      return (
        <p>$ {row.original.low_24h.toLocaleString()}</p>
      );
    },
  }
]