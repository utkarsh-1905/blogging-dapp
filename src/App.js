import { ThemeProvider, createTheme } from "@mui/material";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Write from "./components/Write";
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
          <Route path="/" element={<h1>hello</h1>} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
