import React from "react";
import CustomCard from "./Card";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import {
  Container,
  Box,
  Typography,
  Stack,
  Skeleton,
  Paper,
} from "@mui/material";

const HomePage = () => {
  const { contract } = useContract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  const { data, isLoading } = useContractRead(contract, "getPosts");

  return (
    <Box>
      <Typography variant="h2" align="center" sx={{ mt: 3, mb: 3 }}>
        Recently Published
      </Typography>
      {isLoading ? (
        <Box
          sx={{
            mt: 5,
            ml: 5,
            mr: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <Paper
                sx={{ p: 1, mr: 4, mb: 4, maxWidth: 275, userSelect: "none" }}
                key={item}
              >
                <Stack spacing={1}>
                  <Typography variant="h5">
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      width={250}
                      // height={250}
                    />
                  </Typography>
                  <Typography variant="text.secondary">
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      width={250}
                      // height={250}
                    />
                  </Typography>
                  <Typography variant="text.primary">
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      width={250}
                      sx={{ mt: 3 }}
                    />
                  </Typography>
                  <Skeleton animation="wave" variant="rounded" width={150} />
                </Stack>
              </Paper>
            );
          })}
        </Box>
      ) : (
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
                <CustomCard
                  title={blog[0]}
                  author={blog[3]}
                  desc={blog[1]}
                  key={blog[2]}
                />
              );
            })
          ) : (
            <Container>No Posts to show</Container>
          )}
        </Container>
      )}
    </Box>
  );
};
export default HomePage;
