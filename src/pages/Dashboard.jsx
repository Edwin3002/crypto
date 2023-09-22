import CardCurrency from "../componentes/CardCurrency";
import FlexBox from "../componentes/FlexBox";
import Tabla from "../componentes/Tabla";
import CardSaldo from "../componentes/CardSaldo";
import { Box, Grid } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";
import Layout from "../Layout/Layout";
import DetalleCripto from "./DetalleCripto";
import monedasLista from "../mocks/monedasLista";
import { columnsCriptos } from "../page-sections/columnsTable/ColumnsCriptos";
import { H2, Paragraph } from "../componentes/Typography";

const Dashboard = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (_, value) => setTabValue(value);

  return (
    <Box pb={4}>
      <TabContext value={tabValue}>
        <Layout handleTabList={handleTabChange}>
          <TabPanel value="1">
            <FlexBox width justifyContent="center">
              <FlexBox width="80%" flexDirection="column">
                <Grid container spacing={2}>
                  <Grid item lg={3} md={12}  sm={12}>
                    <CardSaldo />
                  </Grid>
                  <Grid item lg={7} md={12} sm={12}>
                    <CardCurrency />
                  </Grid>
                </Grid>
                <FlexBox flexDirection="column" gap={3}>
                  <FlexBox alignItems="center" justifyContent="space-between" mt="2.75rem" mb={2} width="90%">
                    <H2>Comprar criptomonedas</H2>
                    <Paragraph sx={{ color: "primary.main", fontSize: "18px", fontWeight: "400", cursor: "pointer" }}>Ver todo</Paragraph>
                  </FlexBox>
                  <Tabla columnas={columnsCriptos} data={monedasLista} />
                  <FlexBox alignItems="center"  mt={3} mb={2} width="90%">
                    <H2>Mis Transacciones de compra</H2>
                  </FlexBox>
                  <Tabla columnas={columnsCriptos} data={monedasLista} />
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </TabPanel>
          <TabPanel value="2">
            <DetalleCripto />
          </TabPanel>
        </Layout>
      </TabContext>
    </Box>
  );
};

export default Dashboard;
