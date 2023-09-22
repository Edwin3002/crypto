/* eslint-disable no-unused-vars */
import { Box, Grid } from "@mui/material";
import LoginFormulario from "../../componentes/LoginFormulario";
import FlexBox from "../../componentes/FlexBox";
import fotoWallet from "../../assets/foto_wallet.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Login = () => {
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
      justifyContent="center"
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
            <Box
              align="center"
              width
              py={5}
              sx={{
                borderRadius: "0.75rem",
                border: "1px solid #F0F0F0",
                boxShadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
              }}
            >
              <LoginFormulario />
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

export default Login;
