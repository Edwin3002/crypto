import React from 'react'
import FlexBox from '../componentes/FlexBox'
import { H1 } from '../componentes/Typography'
import Tabla from '../componentes/Tabla'
import catalogoMisCriptos from '../mocks/catalogoMisCriptos'
import { columnsCatalogoMisCriptos } from '../page-sections/columnsTable/ColumnsCatalogoMisCriptos'
import { Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'


const CatalogoCripto = () => {
  const [value, setValue] = React.useState('1');
  const handleChange = (_, newValue) => {
    setValue(newValue);
  }

  return (
    <FlexBox flexDirection="column" width alignItems="center">
      <FlexBox width="70%" flexDirection="column">
          <H1 mb="1.5rem">Listado de mis criptomonedas</H1>
          <TabContext value={value}>
            <TabList value={value} onChange={handleChange} aria-label="basic tabs example" sx={{borderBottom: "1px solid #DCDCDC"}}>
              <Tab label="Vender" value="1" />
              <Tab label="Ordenes de venta" value="2" />
            </TabList>
            <TabPanel value="1">
              <Tabla columnas={columnsCatalogoMisCriptos} data={catalogoMisCriptos} esPaginable />
              <H1 my="1.5rem">Mis transacciones de venta</H1>
              <Tabla columnas={columnsCatalogoMisCriptos} data={catalogoMisCriptos} esPaginable />
            </TabPanel>
          </TabContext>
      </FlexBox>
    </FlexBox>
  )
}

export default CatalogoCripto