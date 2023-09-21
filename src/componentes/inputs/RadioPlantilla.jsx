import { FormControlLabel, FormLabel, RadioGroup, styled, Typography } from "@mui/material";
import AppRadio from "./AppRadio";

export const RadioPlantilla = ({
    handleChange,
    data,
    name,
    label,
    error,
    helpertext,
    value,
    disabled,
}) => {
    const TextError = styled(Typography)(({ theme }) => ({
        color: theme.palette.error.main,
    }));

    return (
        <>
            <FormLabel>{label}</FormLabel>
            <RadioGroup row value={value}
                name={name}
            >
                {data.map((dato, index) => (
                    <FormControlLabel
                        disabled={disabled}
                        key={index}
                        onChange={handleChange}
                        value={dato}
                        control={<AppRadio />}
                        label={dato}
                    />
                ))}
                <TextError>{helpertext}</TextError>
                <TextError> {error}</TextError>
            </RadioGroup>
        </>
    );
};
