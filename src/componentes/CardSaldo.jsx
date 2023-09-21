import React from 'react'
import { Card } from './CardCurrency'
import { H3, H4, Paragraph } from './Typography'
import FlexBox from './FlexBox'

const CardSaldo = (props) => {
  return (
    <Card {...props}>
      <Paragraph fontSize={16}>Mis cryptos</Paragraph>
      <FlexBox mt={2} gap={1}>
        <FlexBox alignSelf="flex-start">
          <img alt="icon cryptomoneda" src="src/assets/_Avatar_.svg" width="25px" />
        </FlexBox>
        <FlexBox flexDirection="column" gap={1}>
          <H3>Bitcoin</H3>
          <FlexBox flexDirection="row">
            <H4 fontSize={16}>0.075:</H4>
            <Paragraph fontSize={16}>&nbsp;$ 0.00</Paragraph>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Card>
  )
}

export default CardSaldo