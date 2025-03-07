// import React from "react";
// import { Box, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
// import { styled } from "@mui/system";
// import est1 from "../assets/est1.png";
// import est2 from "../assets/est2.png";
// import est3 from "../assets/est3.png";
// import est4 from "../assets/est4.png"

// const services = [
//   {
//     title: "Покупка",
//     description:
//       "Помогу вам найти идеальный дом в лучших районах Торонто и GTA. Благодаря моему знанию местного рынка и многолетнему опыту, процесс для вас будет простым и понятным, а условия сделки – наиболее выгодными",
//     image: est1,
//   },
//   {
//     title: "Продажа",
//     description: "Обеспечу максимально выгодную продажу",
//     image: est2,
//   },
//   {
//     title: "Сдать в аренду",
//     description: "Помогу найти надёжных арендаторов для вашей инвестиционной недвижимости",
//     image: est3,
//   },
//   {
//     title: "Арендовать жилье",
//     description: "Быстрый поиск подходящих вариантов аренды",
//     image: est4,
//   },
// ];

// const StyledCard = styled(Card)({
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   transition: "transform 0.3s ease-in-out",
//   "&:hover": {
//     transform: "translateY(-10px)",
//   },
// });

// const CardContentWrapper = styled(CardContent)({
//   display: "flex",
//   flexDirection: "column",
//   flexGrow: 1,
//   justifyContent: "space-between",
//   position: "relative",
// });

// const StyledButton = styled(Button)({
//   opacity: 0,
//   transition: "opacity 0.3s ease-in-out",
//   marginTop: "auto",
// });

// const ServiceCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
//   <StyledCard sx={{ "&:hover .show-on-hover": { opacity: 1 } }}>
//     <CardMedia component="img" image={image} alt={title} sx={{ height: 200, objectFit: "cover" }} />
//     <CardContentWrapper>
//       <Typography variant="h6" fontWeight="bold">
//         {title}
//       </Typography>
//       <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
//         {description}
//       </Typography>
//       <StyledButton className="show-on-hover" variant="outlined" href="#contact" >
//         Бесплатная консультация
//       </StyledButton>
//     </CardContentWrapper>
//   </StyledCard>
// );

// const Services: React.FC = () => {
//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" width="100%">
//       <Typography variant="h4" fontWeight="bold" margin={4} sx={{ color: "white" }}>
//         Услуги
//       </Typography>
//       <Box display="flex" justifyContent="space-between" gap={2} width="80%">
//         {services.map((service, index) => (
//           <ServiceCard key={index} {...service} />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Services;
import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { styled } from "@mui/system";
import est1 from "../assets/est1.png";
import est2 from "../assets/est2.png";
import est3 from "../assets/est3.png";
import est4 from "../assets/est4.png";

const services = [
  {
    title: "Покупка",
    description:
      "Помогу вам найти идеальный дом в лучших районах Торонто и GTA. Благодаря моему знанию местного рынка и многолетнему опыту, процесс для вас будет простым и понятным, а условия сделки – наиболее выгодными",
    image: est1,
  },
  {
    title: "Продажа",
    description: "Обеспечу максимально выгодную продажу",
    image: est2,
  },
  {
    title: "Сдать в аренду",
    description: "Помогу найти надёжных арендаторов для вашей инвестиционной недвижимости",
    image: est3,
  },
  {
    title: "Арендовать жилье",
    description: "Быстрый поиск подходящих вариантов аренды",
    image: est4,
  },
];

const StyledCard = styled(Card)({
  flex: 1,
  position: "relative",
  height: 350,
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
  },
  "&:hover .show-on-hover": {
    opacity: 1,
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

const CardImage = styled("div")<{ image: string }>(({ image }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 0,
}));

const OverlayContent = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  height: "40%", 
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
  background: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(5px)",
  boxShadow: "0px -4px 7px 0px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  zIndex: 1,
});

const StyledButton = styled(Button)({
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  background: "rgba(255, 255, 255, 0.54)",
  backdropFilter: "blur(8px)",
  boxShadow: "0px -4px 7px 0px rgba(0, 0, 0, 0.25)",
  color: "black"
});

const ServiceCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <StyledCard>
    <CardImage image={image} />
    <OverlayContent>
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </OverlayContent>
    <Box display="flex" justifyContent="center" mt="auto" pb={2}>
      <StyledButton className="show-on-hover" variant="contained" href="#contact">
        Бесплатная консультация
      </StyledButton>
    </Box>
  </StyledCard>
);

const Services: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%" marginTop={12}>
      {/* <Typography variant="h4" fontWeight="bold" margin={4} sx={{ color: "white" }}>
        Услуги
      </Typography> */}
      <Box display="flex" justifyContent="space-between" gap={2} width="80%">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Box>
    </Box>
  );
};

export default Services;
