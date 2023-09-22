import CardCurrency from "../componentes/CardCurrency";
import FlexBox from "../componentes/FlexBox";
import Tabla from "../componentes/Tabla";
import CardSaldo from "../componentes/CardSaldo";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import monedasLista from "../mocks/monedasLista";
import { columnsCriptos, columnsCriptosApi } from "../page-sections/columnsTable/ColumnsCriptos";
import { H2, Paragraph } from "../componentes/Typography";
import ChipButtom from "../componentes/ChipButtom";
import { useNavigate } from "react-router";
import { cryptoList } from "../mocks/cryptoList";
import axios from "axios";


const Dashboard = () => {
  const navigate = useNavigate();

  const navegarADetalleCripto = () => {
    navigate("/detalle-cripto");
  }

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setCoins(res?.data);
      console.log(res?.data);
    } catch (error) {
      setCoins(cryptoList);
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box pb={4}>
      <FlexBox width justifyContent="center">
        <FlexBox width="70%" flexDirection="column">
          <Grid container spacing={2}>
            <Grid item md={12} lg={3} sm={12}>
              <CardSaldo />
            </Grid>
            <Grid item lg={5} md={12} sm={12}>
              <CardCurrency />
            </Grid>
          </Grid>
          <FlexBox flexDirection="column" gap={3}>
            <FlexBox alignItems="center" justifyContent="space-between" mt="2.75rem" mb={2} width="90%">
              <H2>Comprar criptomonedas</H2>
              <Paragraph sx={{ color: "primary.main", fontSize: "18px", fontWeight: "400", cursor: "pointer" }}>Ver todo</Paragraph>
            </FlexBox>
            <Tabla
              columnas={[...columnsCriptos, {
                Header: "Acción",
                Cell: ({ row }) => {
                  return (
                    <ChipButtom title="Ver detalle" notificacion={navegarADetalleCripto} />
                  );
                }
              }]} data={monedasLista} />
            <FlexBox alignItems="center" mt={3} mb={2} width="90%">
              <H2>Mis Transacciones de compra</H2>
            </FlexBox>
            {/* <Tabla columnas={columnsTransacciones} data={transaccionesCriptos} /> */}
            {coins?.[0] && <Tabla columnas={coins?.[0] ? columnsCriptosApi : columnsCriptos} data={coins?.[0] ? coins : monedasLista} />} 

          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};

export default Dashboard;
