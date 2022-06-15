import { Card, Typography } from "@mui/material";
import { Restaurant } from "../../types";

type RestaurantInfoProps = {
  restaurant: Restaurant;
};

export const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  restaurant,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">{restaurant.name}</Typography>
    </Card>
  );
};
