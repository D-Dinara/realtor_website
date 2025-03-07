import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import bgImage from "../assets/hero-bg.png";

const HeroSection = styled(Box)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  padding: "0 20px",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
});

const Overlay = styled(Box)({
  backgroundColor: "rgba(133, 168, 198, 0.6)",
  width: "80%",
  height: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  borderRadius: "10px",
});

const CustomButton = styled(Button)({
  backdropFilter: "blur(8px)",
  boxShadow: "3px 4px 11px 0px rgba(255, 255, 255, 0.7), -4px -4px 18px 0px rgba(255, 255, 255, 0.5)",
  border: "1px solid rgba(255, 255, 255, 1)",
  background: "rgba(1, 1, 1, 0.5)",
  width: "245px",
  height: "47px",
  borderRadius: "4px",
  borderWidth: "1px",
});

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <Overlay>
      <Typography variant="h2" fontWeight="bold">
          Ваш надежный ЭКСПЕРТ на рынке недвижимости в Торонто и GTA
        </Typography>
        <Typography variant="h5" sx={{ mt: 4, mb: 4 }}>
          Профессиональное сопровождение покупки, продажи и аренды жилья
        </Typography>
        <CustomButton variant="contained" href="#contact">
          Связаться со мной
        </CustomButton>
      </Overlay>
    </HeroSection>
  );
};

export default Hero;
