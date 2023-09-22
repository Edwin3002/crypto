/* eslint-disable react/no-unescaped-entities */
import { H3, H4, Paragraph } from "./Typography";
import AppSelect from "./AppSelect";
import FlexBox from "./FlexBox";

const CardSaldo = () => {
  return (
    <FlexBox
      sx={{
        borderRadius: "0.75rem",
        border: "1px solid #F0F0F0",
        background: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
        height: "148px",
        flexDirection: "column",
        gap: 2,
        px: "1.25rem",
      }}
    >
      <FlexBox width justifyContent="flex-start">
        <Paragraph fontSize={20} fontWeight={400}>
          Mis cryptos
        </Paragraph>
      </FlexBox>
      <FlexBox alignItems="center" gap={2}>
        <img width={"29px"} src="src/assets/_Avatar_.svg" alt="bitcoin" />
        <FlexBox flexDirection="column">
          <FlexBox width>
            <H3>Bitcoin</H3>
          </FlexBox>
          <FlexBox>
            <Paragraph marginRight={"10px"} fontSize={16}>
              <strong>0.001 =</strong> 1.046.882
            </Paragraph>
            <AppSelect>
              <option value="COP">COP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </AppSelect>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default CardSaldo;
