/* eslint-disable react/prop-types */
import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { H2, Small } from "./Typography";
import { useNavigate } from "react-router";
import FlexBox from "./FlexBox";

const commonCSS = {
  minWidth: 120,
  "&:nth-of-type(2)": {
    minWidth: 170,
  },
  "&:nth-of-type(3)": {
    minWidth: 80,
  },
};

const HeadTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  fontWeight: 600,
  padding: "16px",
  "&:first-of-type": {
    paddingLeft: 0,
  },
  "&:last-of-type": {
    paddingRight: 0,
  },
}));
const BodyTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  padding: 0,
  paddingLeft: "1rem",
  paddingTop: "0.7rem",
  "&:first-of-type": {
    paddingLeft: 0,
  },
  "&:last-of-type": {
    paddingRight: 0,
  },
  [theme.breakpoints.down("sm")]: { ...commonCSS },
  [theme.breakpoints.between(960, 1270)]: { ...commonCSS },
}));

const Tabla = ({ headers, data }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: "2rem",
      }}
    >
      <H2>Lista de Criptomonedas</H2>
      <Table>
        <TableHead
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <TableRow>
            {headers.map((item) => (
              <HeadTableCell key={item}>{item}</HeadTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {
                console.log(item)
              }
              <BodyTableCell>
                <Box alignItems="center" display="flex">
                  <img src={item.image} alt="product title" width="40px" />
                  <Box ml={2}>
                    <small style={{ display: "block" }}>
                      <Small>{item.nombre}</Small>
                    </small>
                    {item.detalle && (
                      <small style={{ display: "block" }}>{item.detalle}</small>
                    )}
                  </Box>
                </Box>
              </BodyTableCell>
              <BodyTableCell>{item.precio}</BodyTableCell>
              <BodyTableCell>{item.cambio}</BodyTableCell>
              <BodyTableCell>{item.volumen}</BodyTableCell>
              <BodyTableCell>{item.capMercado}</BodyTableCell>
              {item.fraccion && (
                <BodyTableCell>{item.fraccion}</BodyTableCell>
              )}
              <BodyTableCell>
                <small
                  style={{
                    backgroundColor: "#2196F3",
                    borderRadius: "100px",
                    padding: "8px",
                    height: "32px",
                    width: "83px",
                    color: "white",
                    size: "13px",
                    cursor: "pointer  ",
                  }}
                  onClick={() => navigate("/detalle-cripto")}
                >
                  Ver Detalle
                </small>
              </BodyTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Tabla;
