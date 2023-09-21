import React from 'react'
import FlexBox from '../componentes/FlexBox'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DetalleCripto = () => {
  return (
    <FlexBox flexDirection="column">
      <FlexBox flexDirection="row" width justifyContent="flex-start" alignItems="center">
        <ArrowBackIcon />
        <h1>Detalle Cripto</h1>
      </FlexBox>
    </FlexBox>
  )
}

export default DetalleCripto