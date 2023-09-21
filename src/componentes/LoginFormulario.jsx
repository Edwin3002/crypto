import React from 'react'
import FlexBox from './FlexBox'
import { H2 } from './Typography'
import { Formik } from 'formik'

const LoginFormulario = () => {
  return (
    <FlexBox justifyContent="center" sx={{border: "1px solid"}}>
      <H2>Bienvenido a GSE crypto!</H2>
      <Formik>
        
      </Formik>
    </FlexBox>
  )
}

export default LoginFormulario