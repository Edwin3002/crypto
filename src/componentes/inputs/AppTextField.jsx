import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    // Propiedad que permite cambiar el color del icono de calendario en el input de tipo date
    "&::-webkit-calendar-picker-indicator": {
      filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(106deg) brightness(103%) contrast(102%)",
    },
  },

  "& .MuiOutlinedInput-input": {
    fontWeight: 500,
    color: theme.palette.text.primary,
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
    borderColor: "#FFFAF2",
    background: "",
  },

  "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.action.hover,
    background: "",
  },

  "& .MuiInputLabel-root": {
    fontWeight: 600,
    color: "#FFFAF2",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    fontWeight: 600,
  },

  "& .MuiSvgIcon-root": {
    color: theme.palette.text.disabled,
  },

  "& .MuiOutlinedInput-input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 100px #212746 inset;",
  },
}));

const AppTextField = (props) => {
  return <StyledTextField {...props} />;
};

export default AppTextField;
