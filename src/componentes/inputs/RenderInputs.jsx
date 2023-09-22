import { FormControlLabel, Grid, Select, TextField } from "@mui/material";
import AppCheckBox from "../inputs/AppCheckBox";
import { useFormikContext } from "formik";
import { H6 } from "../Typography";
import AppTextField from "./AppCheckBox";
import { RadioPlantilla } from "./RadioPlantilla";
import { ValoresSelectValues } from "./ValoresSelectValues";

const RenderInputs = ({ data = [], lectura }) => {
  const { values, handleChange, errors, touched, handleBlur } = useFormikContext();

  return (
    <Grid container spacing={3}>
      {data.map((item, index) => {
        return (
          <Grid key={index} item md={item.size?.[2] || 12} sm={item.size?.[1] || 12} xs={item.size?.[0] || 12}>
            <H6 sx={{ my: 3 }}>{item.title}</H6>
            <Grid container spacing={3}>
              {item.inputs.map((itemInputs, index) => {
                if (itemInputs.Component) {
                  return (
                    <Grid
                      key={index + itemInputs.name}
                      item
                      md={itemInputs.size?.[2] || 12}
                      sm={itemInputs.size?.[1] || 12}
                      xs={itemInputs.size?.[0] || 12}
                    >
                      {itemInputs.Component}
                    </Grid>
                    )
                }
                if (itemInputs.type === "text") {
                  return (
                    <Grid
                      key={index + itemInputs.name}
                      item
                      md={itemInputs.size?.[2] || 12}
                      sm={itemInputs.size?.[1] || 12}
                      xs={itemInputs.size?.[0] || 12}
                    >
                      <TextField
                        fullWidth
                        disabled={lectura || itemInputs.disabled}
                        name={itemInputs.name}
                        label={itemInputs.label}
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={itemInputs?.value || values[itemInputs.name]}
                        helperText={touched[itemInputs.name] && errors[itemInputs.name]}
                        error={Boolean(touched[itemInputs.name] && errors[itemInputs.name])}
                      />
                    </Grid>
                  );
                }
                if (itemInputs.type === "number") {
                  return (
                    <Grid
                      key={index + itemInputs.name}
                      item
                      md={itemInputs.size?.[2] || 12}
                      sm={itemInputs.size?.[1] || 12}
                      xs={itemInputs.size?.[0] || 12}
                    >
                      <TextField
                        type="number"
                        fullWidth
                        disabled={lectura || itemInputs.disabled}
                        name={itemInputs.name}
                        label={itemInputs.label}
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={itemInputs?.value || values[itemInputs.name]}
                        helperText={touched[itemInputs.name] && errors[itemInputs.name]}
                        error={Boolean(touched[itemInputs.name] && errors[itemInputs.name])}
                      />
                    </Grid>
                  );
                }
                if (itemInputs.type === "select") {
                  return (
                    <Grid
                      key={index + itemInputs.name}
                      item
                      md={itemInputs.size?.[2] || 12}
                      sm={itemInputs.size?.[1] || 12}
                      xs={itemInputs.size?.[0] || 12}
                    >
                      <TextField
                        select
                        fullWidth
                        disabled={lectura || itemInputs.disabled}
                        name={itemInputs.name}
                        label={itemInputs.label}
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values[itemInputs.name]}
                        helperText={touched[itemInputs.name] && errors[itemInputs.name]}
                        error={Boolean(touched[itemInputs.name] && errors[itemInputs.name])}
                      >
                        {itemInputs.dataComponent ? (
                          itemInputs.dataComponent
                        ) : (
                          <ValoresSelectValues data={itemInputs.data} value={itemInputs.dataValue} label={itemInputs.dataLabel} />
                        )}
                      </TextField>
                    </Grid>
                  );
                }
                if (itemInputs.type === "textArea") {
                  return (
                    <Grid
                      key={index + itemInputs.name}
                      item
                      md={itemInputs.size?.[2] || 12}
                      sm={itemInputs.size?.[1] || 12}
                      xs={itemInputs.size?.[0] || 12}
                      sx={{ mb: 2 }}
                    >
                      <AppTextField
                        fullWidth
                        sx={{ width: "100%", backgroundColor: itemInputs.disabled ? "#0F1B25" : "#0F1B29" }}
                        multiline
                        rows={3.5}
                        disabled={lectura || itemInputs.disabled}
                        name={itemInputs.name}
                        label={itemInputs.label}
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values[itemInputs.name]}
                        helperText={touched[itemInputs.name] && errors[itemInputs.name]}
                        error={Boolean(touched[itemInputs.name] && errors[itemInputs.name])}
                      />
                    </Grid>
                  );
                }
                if (itemInputs.type === "check") {
                  return (
                    <Grid
                      key={index + itemInputs.name}
                      item
                      md={itemInputs.size?.[2] || 12}
                      sm={itemInputs.size?.[1] || 12}
                      xs={itemInputs.size?.[0] || 12}
                      display="flex"
                      direction="column"
                    >
                      <FormControlLabel
                        control={
                          <AppCheckBox
                            sx={{ mx: 2 }}
                            disabled={lectura || itemInputs.disabled}
                            checked={values[itemInputs.name]}
                            onChange={handleChange}
                          />
                        }
                        label={itemInputs.label}
                        name={itemInputs.name}
                      />
                      <H6 sx={{ color: "red" }}>
                        {touched[itemInputs.name] && errors[itemInputs.name]}
                        {Boolean(touched[itemInputs.name] && errors[itemInputs.name])}
                      </H6>
                    </Grid>
                  );
                }
                if (itemInputs.type === "radio") {
                  return (
                    <Grid
                      key={index + itemInputs.name}
                      item
                      md={itemInputs.size?.[2] || 12}
                      sm={itemInputs.size?.[1] || 12}
                      xs={itemInputs.size?.[0] || 12}
                    >
                      <RadioPlantilla
                        disabled={lectura || itemInputs.disabled}
                        handleChange={handleChange}
                        value={values[itemInputs.name]}
                        data={itemInputs.data}
                        name={itemInputs.name}
                        label={itemInputs.label}
                        helpertext={touched[itemInputs.name] && errors[itemInputs.name]}
                        error={Boolean(touched[itemInputs.name] && errors[itemInputs.name])}
                      />
                    </Grid>
                  );
                }
                if (itemInputs.type === "date") {
                  return (
                    <Grid
                      key={index + itemInputs.name}
                      item
                      md={itemInputs.size?.[2] || 12}
                      sm={itemInputs.size?.[1] || 12}
                      xs={itemInputs.size?.[0] || 12}
                    >
                      <AppTextField
                        type="date"
                        fullWidth
                        disabled={lectura || itemInputs.disabled}
                        name={itemInputs.name}
                        label={itemInputs.label}
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={itemInputs.inputProps}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values[itemInputs.name]}
                        helperText={touched[itemInputs.name] && errors[itemInputs.name]}
                        error={Boolean(touched[itemInputs.name] && errors[itemInputs.name])}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default RenderInputs;

// ejemplo de data
// const dataForm = [
//   {
//     size: [12, 12, 12],
//     title: "1",
//     inputs: [
//          {
//          type: "text",                   required
//          name: "otrosDescripcionTR",     required
//          label: "Otros",                  required
//          size: [12, 6, 6],
//          },
//       {
//         type: "select",         required
//         name: "a",             required
//         label: "Caso",         required
//          size: [12, 12, 12],
//
//        necesito solo el data o el dataComponent

//         - required si es un array
//       #example data: dataInconsistencias = [
//         "Documento Incompleto",
//         "Documento Ilegible",]

//        pero si es un array de objetos
//
//        #example  data: [
//                { key: 3, string: "asd" },
//                { key: 1, string: "set" }
//               ],
//                 dataValue: "key",
//                 dataLabel: "string"
//                },

//       - required si renderiza un componente de options del select
//        #example dataComponent: <ValoresSelectValues data={[]}
//                      value="_id" label="nombreSociedad" />

//        renderiza el municipio con el code del departamento
//        nameDepartamento: "departamentoCentro",
//        municipios: true

//       },
//       {
//         type: "textArea",          required
//         name: "b",                 required
//         label: "Obsevación",       required
//         size: [12, 12, 12]
//       },
//     ]
//   },
//   {
//     title: "1",
//     size: [12, 12, 12],
//     inputs: [
//       {
//          type: "check",          required
//          name: "c",               required
//       label: "Dificultad ",       required
//        size: [12, 6, 6],
//       },
//       {
//        type: "radio",              required
//      data: ["No", "Si"],            required
//      name: "diagnosticadoM",        required
//      label: "¿Es diagnosticado?",   required
//      size: [12, 12, 12],
//      }
//      {
//        type: "date",                           required
//        name: "fechaExpedicionResolucion",      required
//        label: "F. Expedición Resolución",      required
//        size: [12, 6, 6],
//        inputProps: {
//         max: moment().format("YYYY-MM-DD"),
//       min: moment(fechas.fechaMin).format("YYYY-MM-DD"),
//    }
// }
//     ]
//   },
// ];