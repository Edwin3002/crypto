import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import FlexBox from "./FlexBox";
import { H2 } from "./Typography";
import AppTextField from "./inputs/AppTextField";
import { RecoverPassword, UpdatePassword } from "../services/auth.services";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const RecuperarContraseñaForm = () => {
  const navigate = useNavigate();

  const [documentExist, setDocumentExist] = useState(false);
  const validationSchema = Yup.object().shape({
    document: Yup.string().required("El documento es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      document: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (!documentExist) {
        const response = await RecoverPassword(values);
        if (response.success) {
          toast.success("¡Usuario encontrado!");
          setTimeout(() => {
            setDocumentExist(true);
          }, 1000);
        } else {
          toast.error("El usuario no existe");
        }
      } else if (documentExist) {
        const response = await UpdatePassword(values);
        if (response.success) {
          toast.success("¡Actualizado correctamente!");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast.error("No se pudo actualizar");
        }
      }
    },
  });

  return (
    <>
      <FlexBox justifyContent="center" width mt="2rem" mb="2rem">
        <FlexBox width="70%" flexDirection="column">
          <H2 textAlign="center">Recupera tu contraseña</H2>
          {documentExist ? (
            <form onSubmit={formik.handleSubmit}>
              <FlexBox flexDirection="column" mt={5}>
                <AppTextField
                  sx={{ width: "100%", p: 0, mb: 3 }}
                  type="text"
                  name="document"
                  variant="outlined"
                  label="Número de documento"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.document}
                  disabled
                  error={
                    formik.touched.document && Boolean(formik.errors.document)
                  }
                  helperText={formik.touched.document && formik.errors.document}
                />

                <AppTextField
                  autoFocus
                  sx={{ width: "100%", p: 0, mb: 3 }}
                  type="text"
                  name="password"
                  variant="outlined"
                  label="Nueva contraseña"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <AppTextField
                  autoFocus
                  sx={{ width: "100%", p: 0, mb: 3 }}
                  type="text"
                  name="nuevopass"
                  variant="outlined"
                  label="Confirmar contraseña"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nuevopass}
                  error={
                    formik.touched.nuevopass && Boolean(formik.errors.nuevopass)
                  }
                  helperText={
                    formik.touched.nuevopass && formik.errors.nuevopass
                  }
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
                    Actualizar contraseña
                  </Button>
                </FlexBox>
                <FlexBox mt={4} width justifyContent="center">
                  <u
                    style={{
                      cursor: "pointer",
                      color: "#1565c0",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      setDocumentExist(false);
                    }}
                  >
                    Volver
                  </u>
                </FlexBox>
              </FlexBox>
            </form>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              <FlexBox flexDirection="column" mt={5}>
                <AppTextField
                  autoFocus
                  sx={{ width: "100%", p: 0, mb: 3 }}
                  type="text"
                  name="document"
                  variant="outlined"
                  label="Número de documento existe"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.document}
                  error={
                    formik.touched.document && Boolean(formik.errors.document)
                  }
                  helperText={formik.touched.document && formik.errors.document}
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
                    Recuperar contraseña
                  </Button>
                </FlexBox>
                <FlexBox mt={4} width justifyContent="center">
                  <u
                    style={{
                      cursor: "pointer",
                      color: "#1565c0",
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
          )}
        </FlexBox>
      </FlexBox>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default RecuperarContraseñaForm;
