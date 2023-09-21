import { useState } from 'react'
import FlexBox from './FlexBox'
import { H1, Paragraph } from './Typography'
import { Button, styled } from '@mui/material'
import PayForm from '../paypal/PayForm';

export const Card = styled(FlexBox)(() => ({
  flexDirection: "column",
  gap: 4,
  borderRadius: 3,
  backgroundColor: "white",
}));

const CardCurrency = (props) => {

  const [openModalForm, setOpenModalForm] = useState(false)
  return (
    <Card {...props}>
      <Paragraph fontSize={16}>Mi saldo</Paragraph>
      <FlexBox justifyContent="space-between" width>
        <H1 fontSize={40} color="#272727">$ 0.00</H1>
        <FlexBox>
          <Button
            variant='contained'
            type='submit'
            sx={{ ml: 2, mt: 2 }}
            onClick={() => setOpenModalForm(true)}
          >Ingresar
          </Button>
          <PayForm openModal={openModalForm} setOpenModalForm={setOpenModalForm} />
        </FlexBox>
      </FlexBox>
    </Card>
  )
}


export default CardCurrency