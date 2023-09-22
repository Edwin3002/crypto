
import FlexBox from "../componentes/FlexBox";
import { styled, Tab } from "@mui/material";
import { TabList } from "@mui/lab";
import { H1, Paragraph } from "../componentes/Typography";

const StyledTabList = styled(TabList)(({ theme }) => ({
  paddingLeft: 16,
  paddingRight: 16,
  [theme.breakpoints.up("sm")]: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
    },
  },
}));
const Layout = ({ children, handleTabList }) => {
  return (
    <FlexBox flexDirection="column" gap={6}>
      <FlexBox
        sx={{
          backgroundColor:"#DEEDFA"
        }}
        justifyContent="space-between"
        p={2}
      >
        <FlexBox>
          <H1 sx={{color: "info.dark"}}>GSE Crypto</H1>
        </FlexBox>

        <FlexBox>
          <StyledTabList variant="scrollable" onChange={handleTabList}>
            <Tab disableRipple label="Comprar" value="1"  />
            <Tab disableRipple label="Vender" value="2" />
          </StyledTabList>
        </FlexBox>

        <FlexBox width="150px" alignItems={"center"} justifyContent={"space-between"}>
          <Paragraph>Nombre Usuario</Paragraph>
          <img src="src/assets/account_circle.svg" />
        </FlexBox>
      </FlexBox>

      {children}
    </FlexBox>
  );
};

export default Layout;
