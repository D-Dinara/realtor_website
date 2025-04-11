import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 2 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1 }
};

const reviews = [
  {
    text: "Сергей помог мне найти идеальный дом. Процесс покупки был быстрым и без стресса!",
    name: "Анна К."
  },
  {
    text: "Отличный специалист, который действительно заботится о своих клиентах.",
    name: "Иван П."
  },
  {
    text: "Продал мою квартиру за рекордную цену! Всем рекомендую!",
    name: "Мария Л."
  },
  {
    text: "Профессиональный подход, внимательность к деталям и отличный сервис.",
    name: "Дмитрий С."
  },
  {
    text: "Профессиональный подход, внимательность к деталям и отличный сервис.",
    name: "Дмитрий С."
  },
  {
    text: "Профессиональный подход, внимательность к деталям и отличный сервис.",
    name: "Дмитрий С."
  }
];

const ReviewCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  padding: "20px",
  background: "#f9f9f9",
  borderRadius: "10px",
  height: "300px",
  width: "230px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
  margin: "10px"
});

const StarContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "4px",
  marginBottom: "10px",
});

const Testimonials: React.FC = () => {
  
  return (
    <Box 
      display={"flex"} 
      flexDirection={"column"} 
      alignItems={"center"} 
      width={"100%"} 
      justifyContent={"center"} 
    >
      <Typography variant="h4" fontWeight="bold" marginBottom={1} color="white">
        ОТЗЫВЫ КЛИЕНТОВ
      </Typography>
      <Typography variant="body1" textAlign="center" maxWidth={600} color="white">
        Почему клиенты выбирают работать со мной и рекомендуют своим близким и знакомым
      </Typography>
      <Box
        width={"100%"}
        margin={4}
        overflow={'visible'}
        padding={4}
        sx={{
          background: "rgba(255, 255, 255, 1)"
        }}
        >
      <Box
        width={"80%"}
        margin="0 auto"
        padding={4}
        sx={{
          background: "rgba(255, 255, 255, 1)"
        }}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index}>
                <StarContainer>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} style={{ color: "#FFD700" }} />
                  ))}
                </StarContainer>
                <CardContent sx={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between"}}>
                  <Typography variant="body1" marginBottom={2}>
                    "{review.text}"
                  </Typography>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {review.name}
                  </Typography>
                </CardContent>
              </ReviewCard>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;