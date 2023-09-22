/* eslint-disable no-unused-vars */
import { Box, Grid } from "@mui/material";

// eslint-disable-next-line no-unused-vars
import useMediaQuery from "@mui/material/useMediaQuery";
import fotoWallet from "../../assets/foto_wallet.svg";
import FlexBox from "../../componentes/FlexBox";
import CreateAccountForm from "../../componentes/CreateAccountForm";

const CrearCuenta = () => {
  const matches = useMediaQuery("(min-width:1200px)");

  return (
    <FlexBox
      sx={{
        backgroundImage: "url(src/assets/wave.svg)",
        backgroundSize: "contain",
        position: "relative",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat", // Añade esta propiedad
        minHeight: "100vh",
      }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <FlexBox width="80%">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="85vh"
          width="100%"
        >
          <Grid item xs={12} lg={6} sm={12} md={12}>
            <Box align="center" width>
              <CreateAccountForm />
            </Box>
          </Grid>
          {matches && (
            <Grid item xs={6}>
              <FlexBox justifyContent="center">
                <img src={fotoWallet} alt="foto wallet" width={600} />
              </FlexBox>
            </Grid>
          )}
        </Grid>
      </FlexBox>
    </FlexBox>
  );
};

export default CrearCuenta;
