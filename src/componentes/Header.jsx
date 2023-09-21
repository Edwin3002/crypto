import React from 'react'
import FlexBox from './FlexBox'
import { H1, Paragraph } from './Typography'

const Header = () => {
  return (
    <FlexBox
      sx={{
        backgroundColor: '#DEEDFA',
        height: '50px',
      }}
      p={2}
    >
      <FlexBox flexDirection="row" justifyContent="space-between" width alignSelf="center">
        <H1>GSE Crypto</H1>
        <Paragraph sx={{height: "fit-content"}} textAlign="center">User</Paragraph>
      </FlexBox>
    </FlexBox>
  )
}

export default Header