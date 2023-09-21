import { Form, Formik } from "formik"
import * as yup from "yup";
import ModalForm from "../componentes/modal/ModalForm";

const PayForm = ({ openModal, setOpenModalForm }) => {

  return (
    <>
      <Formik
        initialValues={{ amount: "" }}
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
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <ModalForm
              openModal={openModal}
              handleCloseModal={() => setOpenModalForm(false)}
              subtitle="Por favor indique el saldo a ingresar"
              okButtonText="Confirmar"
              dataForm={[
                {
                  inputs: [
                    {
                      type: "text",
                      name: "amount",
                      label: "Valor",
                    }
                  ],
                },
              ]}
            />
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PayForm