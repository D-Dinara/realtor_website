import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../assets/logo.png";
import nameLogo from "../assets/name-logo.png";


const menuItems = [
  { label: "Главная", link: "#home" },
  { label: "Услуги", link: "#services" },
  { label: "Обо мне", link: "#about" },
  { label: "Отзывы", link: "#testimonials" },
  { label: "Блог", link: "#blog" },
  { label: "Контакты", link: "#contact" },
];

const StyledAppBar = styled(AppBar)({
  position: "sticky",
  top: 0,
  backgroundColor: "#fff",
  color: "#000",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

const Header: React.FC = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
          <img src={logo} alt="Company logo" width={150}/>
          <img src={nameLogo} alt="Realtor logo" width={150}/>
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          {menuItems.map((item) => (
            <Button key={item.label} href={item.link} color="inherit">
              {item.label}
            </Button>
          ))}
        </Box>
        <Button variant="outlined" color="primary" href="#contact" sx={{ ml: 3 }}>
          Получить консультацию
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
