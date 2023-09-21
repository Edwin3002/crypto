import { Checkbox } from "@mui/material";
import CheckBoxIcon from "../../assets/icons/CheckBoxIcon";
import BlankCheckBoxIcon from "../../assets/icons/BlankCheckBoxIcon";

const AppCheckBox = (props) => {
  return (
    <Checkbox
      {...props}
      disableRipple
      checkedIcon={<CheckBoxIcon fontSize="small" color="primary" />}
      icon={props.icon ? <props.icon fontSize="small" color={props.iconColor} /> : <BlankCheckBoxIcon fontSize="small" color="disabled" />}
    />
  );
};

export default AppCheckBox;
