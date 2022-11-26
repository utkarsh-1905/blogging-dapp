import React, { useState } from "react";
import { Box, Container, Typography, TextField } from "@mui/material";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Box>
      <Container sx={{ mt: 5, display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h4"
          sx={{ color: "#9045fe", letterSpacing: "0.2rem", userSelect: "none" }}
        >
          Title
        </Typography>
        <TextField
          label="Title"
          fullWidth
          sx={{ backgroundColor: "#18181b", mt: 4, userSelect: "none" }}
        />
      </Container>
    </Box>
  );
};

export default Write;
