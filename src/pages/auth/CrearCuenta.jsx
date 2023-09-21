import { Box, Grid } from "@mui/material";

import fotoWallet from "../../assets/foto_wallet.svg";
import FlexBox from "../../componentes/FlexBox";
import CreateAccountForm from "../../componentes/CreateAccountForm";

const CrearCuenta = () => {
  return (
    <FlexBox justifyContent="center">
      <FlexBox width="80%">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="85vh"
          width="100%"
        >
          <Grid item xs={6}>
            <Box align="center" width>
              <CreateAccountForm />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FlexBox justifyContent="center">
              <img src={fotoWallet} alt="foto wallet" width={600} />
            </FlexBox>
          </Grid>
        </Grid>
      </FlexBox>
    </FlexBox>
  );
};

export default CrearCuenta;
