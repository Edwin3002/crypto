import { Box, Grid, useMediaQuery } from "@mui/material";
import fotoWallet from "../../assets/foto_wallet.svg";
import FlexBox from "../../componentes/FlexBox";
import RecuperarContraseñaForm from "../../componentes/RecuperarContrasenaForm";

const RecuperarContrasena = () => {
  const matches = useMediaQuery("(min-width:1200px)");

  return (
    <FlexBox
      sx={{
        backgroundImage: "url(https://res.cloudinary.com/dfwy7qa1y/image/upload/v1695413916/wave_pe7d3l.svg)",
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
          height="100vh"
        >
          <Grid
            sx={{
              borderRadius: "0.75rem",
              border: "1px solid #F0F0F0",
              boxShadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
            }}
            item
            xs={12}
            lg={6}
            sm={12}
            md={12}
          >
            <Box align="center" width>
              <RecuperarContraseñaForm />
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

export default RecuperarContrasena;
