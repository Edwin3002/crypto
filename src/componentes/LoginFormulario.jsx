import { useFormik } from "formik";
import * as Yup from "yup";
import FlexBox from "./FlexBox";
import { H2 } from "./Typography";
import AppTextField from "./inputs/AppTextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { LoginUser } from "../services/auth.services";
import { Toaster } from "react-hot-toast";

const LoginFormulario = () => {
  const navigate = useNavigate();

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
      
      const { success, data } = await LoginUser(values);
      // const response = await LoginUser(values);
      // if (success) {
      if (1) {
        console.log("Successful login. Navigating to /dashboard...");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000); 
      } else {
        console.log(data.errors);
        await formik.validateForm(formik.values);
      }
      // if (response.success == true) {
      //   console.log("Successful login. Navigating to /dashboard...");
      //   navigate("/dashboard");
      // } else {
      //   console.error("Error en el inicio de sesión:", response.message);
      //   toast.error("Credenciales invalidas");
      // }
    },
  });

  return (
    <>
      <FlexBox justifyContent="center" width>
        <FlexBox width="70%" flexDirection="column">
          <H2 textAlign="center">Bienvenido a GSE crypto!</H2>
          <form onSubmit={formik.handleSubmit}>
            <FlexBox flexDirection="column" mt={5}>
              <AppTextField
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
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
              <FlexBox
                mt={4}
                width
                justifyContent="center"
                flexDirection="column"
                gap="8px"
              >
                <u
                  style={{
                    cursor: "pointer",
                    color: "#1565c0",
                    fontWeight: 500,
                  }}
                  onClick={() => {
                    navigate("/crear-cuenta");
                  }}
                >
                  ¿No estás registrado? Crea una cuenta
                </u>
                <u
                  style={{
                    cursor: "pointer",
                    color: "#1565c0",
                    fontWeight: 500,
                  }}
                  onClick={() => {
                    navigate("/recuperar-contrasena");
                  }}
                >
                  Olvide mi contraseña
                </u>
              </FlexBox>
            </FlexBox>
          </form>
        </FlexBox>
      </FlexBox>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default LoginFormulario;
