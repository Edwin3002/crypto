import { MenuItem } from "@mui/material";

export const ValoresSelectValues = ({ data, value, label }) => {
  return (
    <>
      <MenuItem value=""></MenuItem>
      {data?.map((item, index) => {
        return (
          <MenuItem value={item?.[value] || item} key={index + item?.[value] || item}>
            {item?.[label] || item}
          </MenuItem>
        );
      })}
    </>
  );
};
