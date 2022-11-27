import { ThemeProvider, createTheme } from "@mui/material";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Write from "./components/Write";
import HomePage from "./components/Home";

export default function Home() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    primary: {
      main: "#9045fe",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
