import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./index.css"
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
    </Box>
  );
}

export default App;
