import React from 'react'
import { Box, Grid } from "@mui/material";
import LoginFormulario from '../componentes/LoginFormulario';
import FlexBox from '../componentes/FlexBox';
import fotoWallet from "../assets/foto_wallet.png"

const Login = () => {
  return (
    <FlexBox justifyContent="center" width>
      <Grid container justifyContent="center" alignItems="center" height="70vh" width="60%">
        <Grid item xs={6}>
          <Box justifyContent="center" width>
            <LoginFormulario/>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <FlexBox justifyContent="center">
            <img 
              src={fotoWallet}
              alt='foto wallet'
            />
          </FlexBox>
        </Grid>
      </Grid>

    </FlexBox>
  )
}

export default Login