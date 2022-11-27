import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { Container, Box } from "@mui/material";

const HomePage = () => {
  const { contract } = useContract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  const { data } = useContractRead(contract, "getPosts");

  return (
    <Box>
      <Container
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {data ? (
          data.map((blog) => {
            return (
              <Card
                title={blog[0]}
                author={blog[3].substring(0, 6)}
                desc={blog[1]}
                key={blog[2]}
              />
            );
          })
        ) : (
          <Container>No Posts to show</Container>
        )}
      </Container>
    </Box>
  );
};
export default HomePage;
