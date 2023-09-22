import React from 'react'
import FlexBox from '../componentes/FlexBox'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { H1, Paragraph } from '../componentes/Typography';
import Tabla from '../componentes/Tabla';
import { useNavigate } from 'react-router';

const DetalleCripto = () => {

  const navigate = useNavigate()

  return (
    <FlexBox flexDirection="column" width alignItems="center">
      <FlexBox width="70%" flexDirection="column">
        <FlexBox flexDirection="row" width justifyContent="flex-start" alignItems="center" gap={1}>
          <ArrowBackIcon sx={{color: 'info.dark', cursor: "pointer"}} onClick={()=>{navigate(-1)}}/>
          <H1>Comprar Bitcoin - BTC</H1>
        </FlexBox>
        <FlexBox mt={3} flexDirection="column" gap={0.5}>
          <Paragraph sx={{color: "text.secondary"}}>Precio hoy</Paragraph>
          <H1 sx={{color: "error.main"}}>$26.986.12  -0,78%</H1>
        </FlexBox>
        {/* <Tabla/> */}
      </FlexBox>
    </FlexBox>
  )
}

export default DetalleCripto