import { useEffect, useState } from "react";
import { H1, Paragraph } from "./Typography";
import { Button, Grid } from "@mui/material";
import PayForm from "../page-sections/paypal/PayForm";
import SellForm from "../page-sections/paypal/SellForm";
import { httpHelper } from "../helpers/http.helper";
import { peticionErronea } from "../helpers/sweetAlert";
import { formatPrice } from "../helpers/constans";

const CardCurrency = () => {
  const [openModalForm, setOpenModalForm] = useState(false);
  const [openModalSellForm, setOpenModalSellForm] = useState(false);
  const [saldoWallet, setSaldoWallet] = useState(0);

  const getWallet = async () => {
    const res = await httpHelper.get(`http://localhost:9051/transaction/wallet/${sessionStorage.getItem("token")}`)
    if (res.success) {
      setSaldoWallet(res.data?.[0]?.balance);
    } else {
      peticionErronea();
    }
  }

  useEffect(() => {
    getWallet();
  }, [])

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
            Mi saldo
          </Paragraph>
        </Grid>
        <Grid item>
          <H1 fontSize={40} color="text.secondary">
            {formatPrice(saldoWallet)}
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
        <PayForm action={getWallet} openModal={openModalForm} setOpenModalForm={setOpenModalForm} />
        <SellForm  action={getWallet} openModal={openModalSellForm} setOpenModalForm={setOpenModalSellForm} />
      </Grid>
    </Grid>
  );
};

export default CardCurrency;
