import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import FlexBox from "./FlexBox";
import { H2 } from "./Typography";
import AppTextField from "./inputs/AppTextField";
import { CreateAccount } from "../services/auth.services";
import SelectCrypto from "./select/selectCrypto";
import documnetType from "../helpers/documentType.helper";
import toast, { Toaster } from "react-hot-toast";
import useMediaQuery from "@mui/material/useMediaQuery";

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:1200px)");

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("El correo electrónico es requerido")
      .email("Correo electrónico no válido"),
    phoneNumber: Yup.string().required("El teléfono es requerido"),
    password: Yup.string()
      .required("La contraseña es requerida")
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
    fullName: Yup.string().required("El nombre es requerido"),
    document: Yup.string().required("El documento de identificación es requerido"),
    documentType: Yup.string().required("Seleccione el tipo de documento"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      document: "",
      documentType: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const response = await CreateAccount(values);
      if (response.success) {
        toast.success("Usuario creado exitosamente");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("¡Ups! hubo un error creando el usuario");
        console.error("Error en el inicio de sesión:", response.message);
      }
    },
  });

  return (
    <>
      <FlexBox justifyContent="center" width mt="2rem" mb="2rem">
        <FlexBox width="70%" flexDirection="column">
          <H2 textAlign="center">Bienvenido a GSE crypto!</H2>
          <form onSubmit={formik.handleSubmit}>
            <FlexBox flexDirection="column" mt={5}>
              <AppTextField
                sx={{ width: "100%", p: 0, mb: 3 }}
                type="text"
                name="fullName"
                variant="outlined"
                label="Nombre"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                error={
                  Boolean(formik.touched.fullName && formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
              <AppTextField
                sx={{ width: "100%", p: 0, mb: 3 }}
                type="text"
                name="email"
                variant="outlined"
                label="Correo electrónico"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <AppTextField
                sx={{ width: "100%", p: 0, mb: 3 }}
                type="text"
                name="phoneNumber"
                variant="outlined"
                label="Número de teléfono"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                error={
                  Boolean(formik.touched.phoneNumber &&
                  formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />

              <SelectCrypto
                label="Tipo de documento"
                update={formik.values.documentType || ""}
                onInputChanged={(value) => {
                  formik.setFieldValue("documentType", value);
                }}
                items={documnetType}
              />

              <AppTextField
                sx={{ width: "100%", p: 0, mb: 3, mt: 3 }}
                type="text"
                name="document"
                variant="outlined"
                label="Número de documento"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.document}
                error={
                  Boolean(formik.touched.document && formik.errors.document)
                }
                helperText={formik.touched.document && formik.errors.document}
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
                  Boolean(formik.touched.password && formik.errors.password)
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
                  Registrarse
                </Button>
              </FlexBox>
              <FlexBox mt={4} width justifyContent="center">
                <u
                  style={{
                    cursor: "pointer",
                    color: matches ? "#FAFAFA" : "#1565c0",
                    fontWeight: 500,
                  }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  ¿Ya está registrado? Inicie sesión
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

export default CreateAccountForm;
