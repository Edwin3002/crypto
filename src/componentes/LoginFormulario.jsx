import { useFormik } from "formik";
import * as Yup from "yup";
import FlexBox from "./FlexBox";
import { H2 } from "./Typography";
import AppTextField from "./inputs/AppTextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { LoginUser } from "../services/auth.services";
import { useState } from "react";

const LoginFormulario = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('')

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("El correo electrónico es requerido")
      .email("Correo electrónico no válido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const response = await LoginUser(values);
      console.log(response)

      // if (response.success) {
      if (1) {
        console.log("Inicio de sesión exitoso:", response);
        navigate("/dashboard");
        
      } else {
        console.error("Error en el inicio de sesión:", response.message);
        setError('Credenciales invalidas');
      }
    },
  });




  return (
    <FlexBox justifyContent="center" width>
      <FlexBox width="70%" flexDirection="column">
        <H2 textAlign="center">Bienvenido a GSE crypto!</H2>
        <form onSubmit={formik.handleSubmit}>
          <FlexBox flexDirection="column" mt={5}>
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
              sx={{ width: "100%", p: 0, mr: 0 }}
              type="password"
              name="password"
              variant="outlined"
              label="Contraseña"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password ||
                (error && "Credenciales inválidas")}
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
                onClick={()=>{navigate('/crear-cuenta')}}
              >
                No está registrado, cree una cuenta
              </u>
            </FlexBox>
          </FlexBox>
        </form>
      </FlexBox>
    </FlexBox>
  );
};

export default LoginFormulario;
