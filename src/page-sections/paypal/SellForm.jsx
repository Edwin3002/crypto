import { MenuItem, TextField } from "@mui/material";
import { Form, Formik } from "formik"
import * as yup from "yup";
import ModalSellForm from "../../componentes/modal/ModalSellForm";

const SellForm = ({ openModal, setOpenModalForm, action }) => {

  const formatPrice = (price) => "$" + Intl.NumberFormat('de-DE').format(price);

  return (
    <Formik
      initialValues={{ amount: "", typeChange: 3900, changeAmount: "" }}
      validationSchema={yup.object({
        amount: yup.number()
          .positive("EL campo debe ser un número positivo")
          .integer("El campo debe ser un número un entero")
          .min(10, "El monto mínimo de retirar es de 10 dólares")
          .max(1000, "El monto máximo a retirar es de 1000 dólares")

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
            action={action}
            title="Dólares a retirar"
            subtitle="Por favor indique el saldo a retirar en dólares"
            okButtonText="Confirmar"
            dataForm={[
              {
                inputs: [
                  {
                    type: "number",
                    name: "amount",
                    label: "Valor a retirar en dólares USD",
                  },
                  {
                    Component: <TextField
                      select
                      fullWidth
                      name="typeChange"
                      label="Selección de divisas"
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
                    label: "Valor de divisa",
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