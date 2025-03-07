import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./index.css"
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <Services />
      <About />
    </Box>
  );
}

export default App;
