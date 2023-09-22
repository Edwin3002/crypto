import { Box, Button } from "@mui/material";
import { toast } from "react-hot-toast";
import { H2, Paragraph } from "../Typography";
import DoneIcon from "@mui/icons-material/Done";


/**
 * Función que muestra un toast personalizado con un icono, título, subtítulo y texto del botón para cerrar el toast
 * @param {Object} [props] - Propiedades del toast
 * @param {React.JSX.Element} [props.IconoComponente] - Componente que se mostrará como icono, si no se pasa se mostrará un icono de success
 * @param {String} [props.titulo="Proceso realizado con éxito"] - Título del toast
 * @param {String} [props.subtitulo=""] - Texto complementario del toast
 * @param {String} [props.textoBoton="Aceptar"] - Texto del botón del toast por defecto es "Aceptar"
 * @example toastModal({ IconoComponente: <IconoCentros />, titulo: "Comparendo agregado con éxito" });
 * @returns {void} - Solamente muestra el toast sin retornar nada
 */
export default function toastModal({
  // IconoComponente = undefined,
  titulo = "Proceso realizado con éxito",
  subtitulo = "",
  textoBoton = "Aceptar",
} = {}) {
  toast((t) => (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" p={2} gap={1} width={400}>
      <DoneIcon />

      <H2 sx={{ color: "black", textAlign: "center" }}>{titulo}</H2>

      <Paragraph sx={{ color: "black", textAlign: "center" }}>{subtitulo}</Paragraph>

      <Button variant="contained" sx={{ width: "100%", mt: 2 }} onClick={() => toast.dismiss(t.id)}>
        {textoBoton}
      </Button>
    </Box>
  ), {
    style: {
      minWidth: "fit-content",
    },
  });
}
