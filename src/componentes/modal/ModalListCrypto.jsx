/* eslint-disable no-unused-vars */
import Table from "@mui/material/Table";
import { styled, Card } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import monedasLista from "../../mocks/monedasLista";

const commonCSS = {
  minWidth: 10,
  "&:nth-of-type(1)": {
    minWidth: 80,
  },
};

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  fontSize: 13,
  fontWeight: 650,
  color: theme.palette.text.secondary,
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:first-of-type": {
    paddingLeft: "0.3rem",
  },
  "&:last-of-type": { paddingRight: 2 },
}));

const StyledTableBodyCell = styled(TableCell)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  "&:first-of-type": {
    textAlign: "left",
    paddingLeft: "0.3rem",
  },
  textAlign: "center",
  [theme.breakpoints.down("sm")]: { ...commonCSS },
  [theme.breakpoints.between(960, 1270)]: { ...commonCSS },
}));
const StyledTableBody = styled(TableBody)(() => ({
  marginTop: "50px",
}));

function createData(moneda, precio) {
  return { moneda, precio };
}

const ModalListCrypto = () => {  
  return (
    <Card>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableHeadCell>Alcance</StyledTableHeadCell>
            <StyledTableHeadCell>Baja</StyledTableHeadCell>
          </TableRow>
        </TableHead>

        <StyledTableBody>
          {/* {rows.map((item, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor:
                  index % 2 === 0 ? "action.hover" : "transparent",
              }}
            >
              <StyledTableBodyCell>{item.alcance}</StyledTableBodyCell>
              <StyledTableBodyCell>{item.Baja}</StyledTableBodyCell>
              <StyledTableBodyCell>{item.Media}</StyledTableBodyCell>
              <StyledTableBodyCell>{item.Alta}</StyledTableBodyCell>
            </TableRow>
          ))} */}
        </StyledTableBody>
      </Table>
    </Card>
  );
};

export default ModalListCrypto;
