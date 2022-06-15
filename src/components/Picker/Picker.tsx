import { Button, Paper } from "@mui/material";
import { useState } from "react";
import { RESTAURANTS } from "../../constants";
import { Restaurant } from "../../types";
import { getRandom } from "../../utils";
import { RestaurantInfo } from "./RestaurantInfo";

export const Picker: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant>();
  const [restaurants, setRestaurants] = useState<Restaurant[]>(RESTAURANTS);

  const handleClick = () => {
    const newRestaurant = getRandom(restaurants);
    setSelectedRestaurant(newRestaurant);
  };

  // TODO Add Autoomplete for origin
  // TODO Add Autoomplete for meal
  // TODO Add Autoomplete for diet
  // TODO Add Autoomplete for tag
  // TODO Add range Slider for speed
  // TODO Add range Slider for price
  // TODO Add Checkbox for terrace
  // TODO Add Checkbox for toilets
  // TODO Add Checkbox for take-away
  // TODO Add Checkbox for eat-in
  // TODO Add Checkbox for customer bowl

  return (
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
      <Button sx={{ margin: "auto" }} variant="contained" onClick={handleClick}>
        {"Random"}
      </Button>
      {selectedRestaurant && <RestaurantInfo restaurant={selectedRestaurant} />}
    </Paper>
  );
};
