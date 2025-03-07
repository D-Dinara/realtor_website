import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import profilePhoto from "../assets/person_bg.jpg";
import creaLogo from "../assets/crea.png";
import oreaLogo from "../assets/orea.png";
import trrebLogo from "../assets/treb.png";
import mlsLogo from "../assets/mls.png";
import remaxLogo from "../assets/ReMax.png";

const AboutContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "40px",
  padding: "40px",
  margin: "50px 0"
});

const PhotoWrapper = styled(Box)({
  flex: "1",
  maxWidth: "400px",
});

const BioWrapper = styled(Box)({
  flex: "1",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const LogoWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "10px",
  padding: "20px",
  marginTop: "20px",
  background: "linear-gradient(176.65deg, #FFFFFF 2.94%, #D9D9D9 97.42%)",
  borderRadius: "10px",
});

const Logo = styled("img")({
  height: "25px",
  objectFit: "contain",
});

const About: React.FC = () => {
  return (
    <AboutContainer>
      <PhotoWrapper>
        <img src={profilePhoto} alt="Сергей Дворцов" style={{ width: "100%", borderRadius: "10px" }} />
      </PhotoWrapper>
      <BioWrapper>
        <Typography variant="h5" fontWeight="bold" color="white">
          ОБО МНЕ
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }} color="white">
          Я Сергей Дворцов, опыт в продажах с 2011 года, лицензированный риелтор в Онтарио, член Toronto Real Estate Board (TRREB),
          агент RE/MAX Hallmark, мастер переговоров, помогаю клиентам принимать правильные решения
        </Typography>
        <LogoWrapper>
          {[creaLogo, oreaLogo, trrebLogo, mlsLogo, remaxLogo].map((logo, index) => (
            <Logo key={index} src={logo} alt="logo" />
          ))}
        </LogoWrapper>
      </BioWrapper>
    </AboutContainer>
  );
};

export default About;
