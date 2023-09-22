/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { margin } from "@mui/system";

const styles = {
  "& .MuiSelect-filled": {
    backgroundColor: "white",
    borderRadius: "8px",
    fontWeight: 500,
    color: "gray",
    border: "1px solid gray",
    transition: "200ms",
    input: {
      "&:-webkit-autofill": {
        boxShadow: "0 0 0 0",
      },
    },
    "&:hover": {
      backgroundColor: "#E8E8E8",
    },

    "&.Mui-disabled": {
      backgroundColor: "#E0E0E0",
    },
  },
  
  "& .MuiFormHelperText-root": {
    margin: "3px 0px 3px",
  },
  "& .MuiFilledInput-input": {
    textAlign: "left",
    height: "32px",
    color: "black",
  },
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 1,
    },
  },
};

const SelectCrypto = ({
  label,
  items,
  defaultLabel = "Seleccionar",
  onInputChanged,
  onItemClicked,
  update,
  returnProperty = "_id",
  keyProperty = "_id",
  isNameWithValue = false,
  returnWholeObject = false,
  menuItemName = "name",
  disabled,
  disabledOptions = [],
  noOptionsText = "No hay opciones disponibles",
  ...props
}) => {
  const handleChange = (event) => {
    if (onInputChanged) {
      onInputChanged(event.target.value);
    }
  };

  return (
    <>
      {items && Array.isArray(items) && items.length ? (
        <FormControl variant="filled" sx={{ width: 1 }} size="small">
          <InputLabel disabled={disabled} id="inp-select1">
            {label}
          </InputLabel>
          <Select
            {...props}
            MenuProps={MenuProps}
            labelId="demo-select-small"
            id={"sel-" + label}
            value={update}
            label={label}
            disabled={disabled}
            onChange={handleChange}
            defaultValue={""}
            sx={styles}
          >
            {items.map((selectCryptoProps) => (
              <MenuItem
                id={"sel-" + selectCryptoProps._id}
                key={selectCryptoProps[keyProperty]}
                disabled={disabledOptions.some(
                  (option) => option._id === selectCryptoProps._id
                )}
                value={
                  returnWholeObject
                    ? selectCryptoProps
                    : selectCryptoProps[returnProperty]
                }
                onClick={() => {
                  if (onItemClicked) {
                    onItemClicked(
                      selectCryptoProps[keyProperty]?.toString() || ""
                    );
                  }
                }}
              >
                {isNameWithValue
                  ? selectCryptoProps[menuItemName] +
                    " - " +
                    (selectCryptoProps?.value || 0)
                  : selectCryptoProps[menuItemName]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <FormControl variant="filled" sx={{ width: 1 }} size="small">
          <InputLabel disabled={disabled} id="inp-select2">
            {label}
          </InputLabel>
          <Select
            {...props}
            MenuProps={MenuProps}
            labelId="demo-select-small"
            id={"sel-" + label}
            value={update}
            disabled={disabled}
            label={label}
            onChange={handleChange}
            defaultValue={""}
            sx={styles}
          >
            <MenuItem value="" disabled>
              {noOptionsText}
            </MenuItem>
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default SelectCrypto;
