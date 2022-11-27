import React, { useState } from "react";
import { Box, Container, Typography, Snackbar, Alert } from "@mui/material";
import { Web3Button } from "@thirdweb-dev/react";
import Blog from "../abi/Blog.json";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Container sx={{ mt: 5, display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h4"
          sx={{ color: "#9045fe", letterSpacing: "0.2rem", userSelect: "none" }}
        >
          Title
        </Typography>
        <input
          type="text"
          style={{
            backgroundColor: "#18181b",
            mt: 4,
            userSelect: "none",
            color: "#fff",
            height: "50px",
            border: "none",
            outline: "none",
            fontSize: "1.2rem",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            marginTop: "1rem",
          }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Typography
          variant="h4"
          sx={{
            color: "#9045fe",
            letterSpacing: "0.2rem",
            userSelect: "none",
            mt: 4,
          }}
        >
          Content
        </Typography>
        <textarea
          style={{
            width: "100%",
            backgroundColor: "#18181b",
            outline: "none",
            color: "white",
            border: "none",
            height: "350px",
            fontSize: "1.2rem",
            padding: "1rem",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderRadius: "10px",
          }}
          onChange={(e) => setContent(e.target.value)}
        />
        <Container>
          <Box sx={{ mt: 4, mb: 4 }}>
            <Web3Button
              accentColor="#9045fe"
              contractAbi={Blog["abi"]}
              contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3"
              colorMode="dark"
              action={async (contract) => {
                await contract.call("createPost", title, content, {
                  gasLimit: 1000000,
                  value: 1000000000000,
                });
              }}
              onSuccess={() => {
                setOpen(true);
                setTimeout(() => {
                  setOpen(false);
                }, 3000);
              }}
            >
              Publish
            </Web3Button>
          </Box>
        </Container>
      </Container>
      {open && (
        <Snackbar open={open}>
          <Alert severity="success">Post Published</Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default Write;
