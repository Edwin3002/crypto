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
import { H2, Paragraph } from "./Typography";
import { useTable } from "react-table";
import { useMemo } from "react";
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
  borderBottom: "none",
}));
const BodyTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 13,
  fontWeight: 400,
  paddingLeft: "1rem",
  paddingTop: "0.7rem",
  "&:first-of-type": {
    paddingLeft: 0,
  },
  "&:last-of-type": {
    paddingRight: 0,
  },
  padding: 16,
  [theme.breakpoints.down("sm")]: { ...commonCSS },
  [theme.breakpoints.between(960, 1270)]: { ...commonCSS },
}));

const Tabla = ({ columnas, data }) => {
  const columns = useMemo(() => columnas, [columnas]);
  const datos = useMemo(() => data, [data]);

  const tableInstance = useTable({
    columns,
    data: datos,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <Table padding="checkbox" {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow
              sx={{
                borderBottom: "none",
              }}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <HeadTableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </HeadTableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow
                sx={{
                    borderBottom: "none",
                }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <BodyTableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </BodyTableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Tabla;
