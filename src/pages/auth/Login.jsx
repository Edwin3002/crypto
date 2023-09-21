import React from 'react'
import { Box, Grid } from "@mui/material";
import LoginFormulario from '../../componentes/LoginFormulario';
import FlexBox from '../../componentes/FlexBox';
import fotoWallet from "../../assets/foto_wallet.svg"

const Login = () => {
  return (
    <FlexBox justifyContent="center">
      <FlexBox width="80%">
        <Grid container justifyContent="center" alignItems="center" height="85vh" width="100%">
          <Grid item xs={6}>
            <Box align="center" width>
              <LoginFormulario/>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FlexBox justifyContent="center">
              <img 
                src={fotoWallet}
                alt='foto wallet'
                width={600}
              />
            </FlexBox>
          </Grid>
        </Grid>
      </FlexBox>
      
    </FlexBox>
  )
}

export default Login