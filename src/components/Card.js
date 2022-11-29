import React from "react";
import "../styles/card.css";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Modal,
  Box,
  Container,
} from "@mui/material";

const CustomCard = (props) => {
  const [open, setOpen] = React.useState(false);
  function handleClick() {
    setOpen(true);
  }
  return (
    <>
      <Card sx={{ minWidth: 250, mr: 4 }} key={props.key}>
        <CardContent>
          <Typography variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.author.substring(0, 10) + " ..."}
          </Typography>
          <Typography variant="body2">
            {props.desc.substring(0, 50) + " ..."}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Read More
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          maxWidth: 500,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
          }}
        >
          <Container>
            <Typography variant="h6" component="div" align="center">
              {props.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
              {props.author}
            </Typography>
            <Typography variant="body2" align="center">
              {props.desc}
            </Typography>
          </Container>
        </Box>
      </Modal>
    </>
  );
};

export default CustomCard;
