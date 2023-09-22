import { useState } from "react";
import { H1, Paragraph } from "./Typography";
import { Button, Grid } from "@mui/material";
import PayForm from "../page-sections/paypal/PayForm";
import SellForm from "../page-sections/paypal/SellForm";

const CardCurrency = () => {
  const [openModalForm, setOpenModalForm] = useState(false);
  const [openModalSellForm, setOpenModalSellForm] = useState(false);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      direction={"row"}
      sx={{
        borderRadius: "0.75rem",
        border: "1px solid #F0F0F0",
        background: "#FFF",
        boxShadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
        height: "148px",
      }}
      px="1.56rem"
    >
      <Grid display="block">
        <Grid item>
          <Paragraph fontSize={20} fontWeight={400}>
            Mi saldo a recargar
          </Paragraph>
        </Grid>
        <Grid item>
          <H1 fontSize={40} color="text.secondary">
            $1.000.100
          </H1>
        </Grid>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          type="submit"
          sx={{ ml: 2, mt: 2 }}
          onClick={() => setOpenModalForm(true)}
        >
          Recargar
        </Button>
        <Button
          variant='outlined'
          type='submit'
          sx={{ ml: 2, mt: 2 }}
          onClick={() => setOpenModalSellForm(true)}
        >Retirar
        </Button>
        <PayForm openModal={openModalForm} setOpenModalForm={setOpenModalForm} />
        <SellForm openModal={openModalSellForm} setOpenModalForm={setOpenModalSellForm} />
      </Grid>
    </Grid>
  );
};

export default CardCurrency;
