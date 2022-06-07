import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { RESTAURANTS } from "../../constants";
import { Restaurant } from "../../types";
import { getRandom } from "../../utils";

export const Picker: React.FC = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>();

  const handleClick = () => {
    const newRestaurant = getRandom(RESTAURANTS);
    setRestaurant(newRestaurant);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={(theme) => ({
          width: "50vw",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          padding: theme.spacing(4),
        })}
        elevation={5}
      >
        <Button
          sx={{ margin: "auto" }}
          variant="contained"
          onClick={handleClick}
        >
          {"I'M HUNGRY"}
        </Button>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">
            {restaurant ? restaurant.name : "?"}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
