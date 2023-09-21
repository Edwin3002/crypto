import React from 'react'
import CardCurrency from '../componentes/CardCurrency'
import FlexBox from '../componentes/FlexBox'
import Tabla from '../componentes/Tabla'
import CardSaldo from '../componentes/CardSaldo'

const Dashboard = () => {
  return (
    <FlexBox width justifyContent="center">
      <FlexBox width="70%" flexDirection="column">
        <FlexBox gap={2} flexDirection="row">
          <CardSaldo py={2.4} px={2.5} width="20%"/>
          <CardCurrency width="30%" py={2.4} px={2.5}/>
        </FlexBox>
        <Tabla headers={headers}data={monedasLista}/>
      </FlexBox>
    </FlexBox>
  )
}

const headers = [
  "Nombre",
  "Precio",
  "Cambio", 
  "Volumen",
  "Cap.Mercado",
  "Ver Detalle"
]

const monedasLista = [
  {
    id: "1",
    capMercado: "$ 542.4B",
    nombre: "Nike Air max 170",
    image: "src/assets/_Avatar_1.svg",
    precio: "$ 654",
    cambio: "0.325 %",
    volumen: "$1,45,660",
  },
  {
    id:"2",
    capMercado: "$ 542.4B",
    nombre: "Cactus Plant",
    image: "src/assets/_Avatar_.svg",
    precio: "$ 654",
    cambio: "0.40 %",
    volumen: "$1,45,420",
  },
  {
    id:"3",
    capMercado: "$ 542.4B",
    nombre: "Minimal Pot",
    image: "src/assets/_Avatar_2.svg",
    precio: "$ 654",
    cambio: "0.57 %",
    volumen: "$45,660",
  },
  {
    id: "4",
    capMercado: "$ 542.4B",
    nombre: "Nike Air max 170",
    image: "src/assets/_Avatar_1.svg",
    precio: "$ 654",
    cambio: "0.325 %",
    volumen: "$1,45,660",
  },
  {
    id:"5",
    capMercado: "$ 542.4B",
    nombre: "Cactus Plant",
    image: "src/assets/_Avatar_.svg",
    precio: "$ 654",
    cambio: "0.40 %",
    volumen: "$1,45,420",
  },
  {
    id:"6",
    capMercado: "$ 542.4B",
    nombre: "Minimal Pot",
    image: "src/assets/_Avatar_2.svg",
    precio: "$ 654",
    cambio: "0.57 %",
    volumen: "$45,660",
  },
];


export default Dashboard