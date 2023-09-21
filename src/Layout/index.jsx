import React from 'react'
import Dashboard from '../pages/Dashboard'
import Header from '../componentes/Header'
import FlexBox from '../componentes/FlexBox'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <FlexBox sx={{
        width: '100%',
        height: 'calc(70vh - 60px)',
        // justifyContent: 'center',
        alignItems: 'center'
      }}>
        {children}
      </FlexBox>
    </>
  )
}

export default Layout