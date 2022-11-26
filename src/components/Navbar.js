import React from "react";
import { AppBar, Box, Container, Button } from "@mui/material";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const address = useAddress();
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="static" sx={{}}>
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "#0f1318",
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <h1 style={{ color: "#9045fe", letterSpacing: "0.2rem" }}>
              Decentralized Blogging
            </h1>
          </Link>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {address && (
              <Box sx={{ marginRight: 4 }}>
                <Button
                  // colorMode="dark"
                  // accentColor="#9045fe"
                  // contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3"
                  // contractAbi={Blog["abi"]}
                  sx={{
                    backgroundColor: "black",
                    color: "#fff",
                    borderColor: "#9045fe",
                    border: "1px solid",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 1rem",
                    marginRight: "1rem",
                    fontSize: "1rem",
                    fontFamily: "'Roboto', sans-serif",
                  }}
                  onClick={() => navigate("/write")}
                >
                  WRITE BLOG
                </Button>
              </Box>
            )}
            {address ? (
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#9045fe",
                  color: "white",
                  maxWidth: 400,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  navigator.clipboard.writeText(address);
                }}
              >
                <ContentPasteIcon sx={{ marginRight: 1, color: "#9045fe" }} />{" "}
                <span>{address.substring(0, 15) + "..."}</span>
              </Button>
            ) : (
              <ConnectWallet colorMode="dark" accentColor="#9045fe" />
            )}
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
