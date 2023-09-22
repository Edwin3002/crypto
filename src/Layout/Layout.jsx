import FlexBox from "../componentes/FlexBox";
import { styled, Tab, Avatar, IconButton, Menu, Typography, MenuItem } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { H1, Paragraph } from "../componentes/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import { tokenJwt } from "../helpers/constans";

const StyledTabList = styled(TabList)(({ theme }) => ({
  paddingLeft: 16,
  paddingRight: 16,
  [theme.breakpoints.up("sm")]: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
    },
  },
}));
const Layout = ({ children }) => {
  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (_, value) => setTabValue(value);
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const redirectToLogin = useNavigate();
  const LogoutUser = () => {
    sessionStorage.removeItem('token');
    redirectToLogin('/');
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getToken = () => {
    if (!tokenJwt) {
      return getToken()
    }
    return
  }

  useEffect(() => {
    getToken()
  }, [])


  return (
    <TabContext value={tabValue}>
      <FlexBox flexDirection="column" gap={6}>
        <FlexBox
          sx={{
            backgroundColor: "#DEEDFA"
          }}
          justifyContent="space-between"
          p={2}
        >
          <FlexBox>
            <H1 sx={{ color: "info.dark" }}>GSE Crypto</H1>
          </FlexBox>

          <FlexBox>
            <StyledTabList variant="scrollable" onChange={handleTabChange}>
              <Tab disableRipple label="Comprar" value="1" onClick={() => navigate("/dashboard")} />
              <Tab disableRipple label="Vender" value="2" onClick={() => navigate("/catalogo-cripto")} />
            </StyledTabList>
          </FlexBox>

          <FlexBox width="150px" alignItems={"center"} justifyContent={"space-between"}>
            {tokenJwt?.fullName}
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5 }}>
              <Avatar
                src=''
                alt='Avatar'
                sx={{ bgcolor: 'paynetDarkGray.main', '& .MuiSvgIcon-root': { color: 'paynetLightGray.main' } }}
              />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>

              <MenuItem onClick={() => LogoutUser()} sx={{ display: 'flex', alignItems: 'center' }}>
                <LogoutIcon sx={{ marginRight: 1 }} />
                <Typography>Cerrar sesión</Typography>
              </MenuItem>
            </Menu>
          </FlexBox>
        </FlexBox>
        {children}
      </FlexBox>
    </TabContext>
  );
};

export default Layout;
