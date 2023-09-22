import { MenuItem, TextField } from "@mui/material";
import { Form, Formik } from "formik"
import * as yup from "yup";
import ModalSellForm from "../../componentes/modal/ModalPayForm";

const SellForm = ({ openModal, setOpenModalForm }) => {

  const formatPrice = (price) => "$" + Intl.NumberFormat('de-DE').format(price);

  return (
    <Formik
      initialValues={{ amount: "", typeChange: 3900, changeAmount: "" }}
      validationSchema={yup.object({
        amount: yup.number()
          .positive("EL campo debe ser positivo")
          .integer("El campo debe ser un entero")
          .min(10, "Mínimo el número 10")
          // .max(9, "Máximo el número 9")
          .typeError("El campo debe ser un número")
          .required("El campo es requerido"),
      })}
      onSubmit={(values) => console.log(values)}
      enableReinitialize
    >
      {({ handleSubmit, values, handleBlur, handleChange, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
          <ModalSellForm
            openModal={openModal}
            handleCloseModal={() => setOpenModalForm(false)}
            subtitle="Por favor indique el saldo a RETIRAR"
            okButtonText="Confirmar"
            dataForm={[
              {
                inputs: [
                  {
                    type: "number",
                    name: "amount",
                    label: "Valor a retirar USD",
                  },
                  {
                    Component: <TextField
                      select
                      fullWidth
                      name="typeChange"
                      label="Moneda"
                      variant="outlined"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.typeChange}
                      helperText={touched.typeChange && errors.typeChange}
                      error={Boolean(touched.typeChange && errors.typeChange)}
                    >
                      <MenuItem value={3900}>COP</MenuItem>
                      <MenuItem value={0.95}>EURO</MenuItem>
                      <MenuItem value={0.8}>LIBRA</MenuItem>
                    </TextField>,
                    size: [12, 4, 4]
                  },
                  {
                    disabled: true,
                    type: "text",
                    name: "changeAmount",
                    label: "Valor de cambio",
                    value: formatPrice(values.amount * values.typeChange),
                    size: [12, 8, 8]
                  }
                ],
              },
            ]}
          >
          </ModalSellForm>
        </Form >
      )
      }
    </Formik >
  )
}

export default SellForm