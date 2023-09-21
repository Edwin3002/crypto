import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import FlexBox from "./FlexBox";
import { H2 } from "./Typography";
import AppTextField from "./inputs/AppTextField";
import { CreateAccount } from "../services/auth.services";

const CreateAccountForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("El correo electrónico es requerido")
      .email("Correo electrónico no válido"),
    phoneNumber: Yup.string().required("El teléfono es requerido"),
    password: Yup.string()
      .required('La contraseña es requerida')
      .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    name: Yup.string().required("El nombre es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      phoneNumber: "",
      password: "",
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const response = await CreateAccount(values);
      if (response.success) {
        console.log("Inicio de sesión exitoso:", response.data);
        navigate("/dashboard");
      } else {
        console.error("Error en el inicio de sesión:", response.message);
      }
    },
  });

  

  return (
    <FlexBox justifyContent="center" width mt='2rem' mb='2rem'>
      <FlexBox width="70%" flexDirection="column">
        <H2 textAlign="center">Bienvenido a GSE crypto!</H2>
        <form onSubmit={formik.handleSubmit}>
          <FlexBox flexDirection="column" mt={5}>
            <AppTextField
              autoFocus
              sx={{ width: "100%", p: 0, mb: 3 }}
              type="text"
              name="name"
              variant="outlined"
              label="Nombre"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <AppTextField
              autoFocus
              sx={{ width: "100%", p: 0, mb: 3 }}
              type="text"
              name="email"
              variant="outlined"
              label="Correo electrónico"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <AppTextField
              autoFocus
              sx={{ width: "100%", p: 0, mb: 3 }}
              type="number"
              name="phoneNumber"
              variant="outlined"
              label="Número de teléfono"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />

            <AppTextField
              sx={{ width: "100%", p: 0, mr: 0 }}
              type="password"
              name="password"
              variant="outlined"
              label="Contraseña"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FlexBox mt={4} width>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  padding: 2,
                }}
              >
                Ingresar
              </Button>
            </FlexBox>
            <FlexBox mt={4} width justifyContent="center">
              <u
                style={{ cursor: "pointer", color: "#1565c0", fontWeight: 500 }}
                onClick={()=>{navigate('/')}}
              >
                ¿Ya está registrado? Inicie sesión
              </u>
            </FlexBox>
          </FlexBox>
        </form>
      </FlexBox>
    </FlexBox>
  );
};

export default CreateAccountForm;
